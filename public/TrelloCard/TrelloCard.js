(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloCard extends HTMLElement {
        constructor() {
            super();

            this.addEventListener('click', e => {
                this.toggleDescription();
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
            // this.shadowRoot.querySelector('.trello-card__columnId').innerHTML = card.columnId;
        }

        removeCard() {
            let cardToBeRemoved = this.shadowRoot.querySelector('.trello-card-container');
            cardToBeRemoved.remove();
        }

        toggleDescription() {
            let elem = this.shadowRoot.querySelector('.trello-card__description');
            if (elem) {
                elem.style.display = elem.style.display == 'none' ? 'block' : 'none';
            }
        }

    }

    customElements.define('trello-card', TrelloCard);
})();

function dragstart_handler(ev) {
    // Add the drag data
    console.log(ev.target.innerHTML, "what is my drag");
    ev.dataTransfer.setData("text/plain", ev.target.innerHTML);
    // drag 'move' is not working
    // ev.dataTransfer.dropEffect = 'move';
}