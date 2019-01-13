(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloCard extends HTMLElement {
        constructor() {
            super();

            this.addEventListener('click', e => {
                this.editCard();
            });

        }

        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = currentDocument.querySelector('#trello-card');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);

            let removeCardButton = this.shadowRoot.querySelector('.trello-card__delete-card');
            removeCardButton.addEventListener('click', e => this.removeCard()); 
        }

        getCardData(card) {
            this.render(card);
        }

        render(card) {
            this.shadowRoot.querySelector('.trello-card-container').id = card.id;
            this.shadowRoot.querySelector('.trello-card__title').innerHTML = card.title;
            this.shadowRoot.querySelector('.trello-card__description').innerHTML = card.description;
            this.shadowRoot.querySelector('.trello-card__columnId').innerHTML = card.columnId;
        }

        editCard() {

    


            var editCard = this.shadowRoot.querySelector('.trello-card-container');

            // this.shadowRoot.querySelector('.trello-card__title').innerHTML = "change";
            // this.shadowRoot.querySelector('.trello-card__description').innerHTML = "change";

        }

        removeCard() {
            let cardToBeRemoved = this.shadowRoot.querySelector('.trello-card-container');
            cardToBeRemoved.remove();
        }

    }

    customElements.define('trello-card', TrelloCard);
})();