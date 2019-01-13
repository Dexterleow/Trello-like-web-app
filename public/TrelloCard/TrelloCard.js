(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloCard extends HTMLElement {
        constructor() {
            super();

            this.addEventListener('click', e => {
                // this.editCard();
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
            this.shadowRoot.querySelector('.trello-card__columnId').innerHTML = card.columnId;
        }

        editCard() {

            // console.log(this.shadowRoot.querySelector('.trello-card__title'), "card title")
            // var editCard = this.shadowRoot.querySelector('.trello-card__title');

            // var bbbb = editCard.getAttribute('.trello-card__title');
            // var att = document.createAttribute("input");
            // console.log(bbbb, "bbbb");
            // console.log(att, "att");
            // editCard.setAttribute(bbbb,att);
            // // var edit2 = editCard.setAttribute('class','info');
            // console.log(editCard, "shadow edit card");
            // // console.log(edit2, "shadow edit card2");


            var editCard = this.shadowRoot.querySelector('.trello-card-container');

            // this.shadowRoot.querySelector('.trello-card__title').innerHTML = "change";
            // this.shadowRoot.querySelector('.trello-card__description').innerHTML = "change";

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