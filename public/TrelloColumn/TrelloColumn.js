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

            let addANewCardButton = this.shadowRoot.querySelector('.trello-column__add-a-new-card');
            addANewCardButton.addEventListener('click', e => this.addNewCard()); 

            let removeColumnButton = this.shadowRoot.querySelector('.trello-column__delete-column');
            removeColumnButton.addEventListener('click', e => this.removeColumn()); 
        }

        getColumnData(column, userSearchQueryValue) {
            this.render(column, userSearchQueryValue);
        }

        render(column, userSearchQueryValue) {

            console.log("userSearchQuery", userSearchQueryValue);

            fetch(`http://localhost:3000/cards${userSearchQueryValue}`)
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

                })
                .catch((error) => {
                    console.error(error);
                });

            this.shadowRoot.querySelector('.trello-column__title').id = column.id;
            this.shadowRoot.querySelector('.trello-column__title').innerHTML = column.title;
        }

        addNewCard() {
                var node = this.shadowRoot.querySelector('.trello-column__title');
                let trelloCard = document.createElement('trello-card');
                var uniqueIdCard = '(' + 'id-' + Math.random().toString(36).substr(2, 16) + ')';
                var object = { title: "New Card " + uniqueIdCard, description: "New Card Description" };
                node.appendChild(trelloCard);
                trelloCard.getCardData(object);
        }

        removeColumn() {
            let columnToBeRemoved = this.shadowRoot.querySelector('.trello-column-container');
            columnToBeRemoved.remove();
        }
    }

    customElements.define('trello-column', TrelloColumn);
})();