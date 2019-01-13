(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloCard extends HTMLElement {
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = currentDocument.querySelector('#trello-card');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);
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
    }

    customElements.define('trello-card', TrelloCard);
})();