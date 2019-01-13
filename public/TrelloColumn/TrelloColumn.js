const rowCards = document.querySelector('.row__cards');

(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloColumn extends HTMLElement {

        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
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

function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
    ev.preventDefault();

    if (!ev.target.getAttribute("ondrop")) {
        console.log("not drop zone");
        return false;
    }

    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text/plain");
    data = data ? data : "Random text to test drop when drag failed";

    var node = document.createElement("DIV");                 
    var textnode = document.createTextNode(data);
    node.appendChild(textnode);
    var dropColumn = ev.path[0].appendChild(node);

    // console.log(data, "drop_handler dataaaa");
    // console.log(ev.path[0], "what is drop in ev zero");
}