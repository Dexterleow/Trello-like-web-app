(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloCard extends HTMLElement {
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = currentDocument.querySelector('#trello-card');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);
        }

        getCardData(card, column) {
            // if matches column id
            if (card.columnId === column.id) {
                this.render(card);
            }
        }

        render(card) {
            // console.log(card, 'what is card');
            this.shadowRoot.querySelector('.trello-card__title').id = card.id;
            this.shadowRoot.querySelector('.trello-card__title').innerHTML = card.title;
            this.shadowRoot.querySelector('.trello-card__description').innerHTML = card.description;
            this.shadowRoot.querySelector('.trello-card__columnId').innerHTML = card.columnId;

        }
    }

    customElements.define('trello-card', TrelloCard);
})();