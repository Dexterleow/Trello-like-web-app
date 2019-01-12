(function () {
    const currentDocument = document.currentScript.ownerDocument;

    class TrelloColumn extends HTMLElement {

        // connectedCallback — Called every time the element is inserted into the DOM.
        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
            // Current document needs to be defined to get DOM access to imported HTML
            const template = currentDocument.querySelector('#trello-column');
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance);
        }

        render() {
            
        }
    }

    customElements.define('trello-column', TrelloColumn);
})();