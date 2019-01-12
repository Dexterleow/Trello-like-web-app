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
        }

        getColumnData(column) {
            this.render(column);
        }

        render(column) {

            fetch(`http://localhost:3000/cards`)
                .then((response) => response.text())
                .then((responseText) => {
                    const cardList = JSON.parse(responseText);

                    console.log(cardList, "is card list obtained?");

                    cardList.forEach(card => {
                            let trelloCard = document.createElement('trello-card');
                            rowCards.appendChild(trelloCard);
                            trelloCard.getCardData(card, column);
                    });

                })
                .catch((error) => {
                    console.error(error);
                });

            // console.log("is rendering trello column working??", column);
            this.shadowRoot.querySelector('.trello-column__title').id = column.id;
            this.shadowRoot.querySelector('.trello-column__title').innerHTML = column.title;
        }
    }

    customElements.define('trello-column', TrelloColumn);
})();