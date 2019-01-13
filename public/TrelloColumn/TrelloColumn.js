const rowCards = document.querySelector('.row__cards');

(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloColumn extends HTMLElement {
        // constructor() {
        //     super();
        // }

        // connectedCallback — Called every time the element is inserted into the DOM.
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
            // Current document needs to be defined to get DOM access to imported HTML
            const template = currentDocument.querySelector('#trello-column');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);

            let removeColumnButton = this.shadowRoot.querySelector('.trello-column__delete-column');
            removeColumnButton.addEventListener('click', e => this.removeColumn()); 
        }

        getColumnData(column) {
            this.render(column);
        }

        render(column) {

            fetch(`http://localhost:3000/cards`)
                .then((response) => response.text())
                .then((responseText) => {
                    const cardList = JSON.parse(responseText);

                    var node = this.shadowRoot.querySelector('.trello-column__title');

                    cardList.forEach(card => {

                        if (card.columnId === column.id) {
                            let trelloCard = document.createElement('trello-card');
                            node.appendChild(trelloCard);
                            trelloCard.getCardData(card);
                        }

                    });

                    let addButtonCard = this._addButtonForNewCard(column);
                    node.appendChild(addButtonCard);
                })
                .catch((error) => {
                    console.error(error);
                });

            this.shadowRoot.querySelector('.trello-column__title').id = column.id;
            this.shadowRoot.querySelector('.trello-column__title').innerHTML = column.title;
        }

        _addButtonForNewCard() {

            let addCardButton = currentDocument.createElement('button');
            addCardButton.innerHTML = "Add New Card";
            addCardButton.onclick = () => {

                var node = this.shadowRoot.querySelector('.trello-column__title');
                let trelloCard = document.createElement('trello-card');
                var object = { title: "New Card", description: "New Card Description" };
                node.insertBefore(trelloCard, addCardButton);
                trelloCard.getCardData(object);

            }
            return addCardButton;
        }

        removeColumn() {
            let columnToBeRemoved = this.shadowRoot.querySelector('.trello-column-container');
            columnToBeRemoved.remove();
        }
    }

    customElements.define('trello-column', TrelloColumn);
})();