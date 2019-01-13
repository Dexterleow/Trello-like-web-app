
const rowColumns = document.querySelector('.row__columns');

(function _fetchAndPopulateData(self) {
    const currentDocument = document.currentScript.ownerDocument;

    fetch(`http://localhost:3000/columns`)
        .then((response) => response.text())
        .then((responseText) => {
            // console.log(responseText);
            const list = JSON.parse(responseText);
            // console.log(list);

            var node = currentDocument.querySelector('.row__columns');

            list.forEach(column => {
                // console.log(column, "rendering column??");
                let trelloColumn = document.createElement('trello-column');
                rowColumns.appendChild(trelloColumn);
                trelloColumn.getColumnData(column);
            });

            function _addButtonColumn() {
                let addColumnButton = currentDocument.createElement('button');
                addColumnButton.innerHTML = "Add New Column";
                addColumnButton.onclick = () => {

                    let trelloColumn = document.createElement('trello-column');
                    rowColumns.insertBefore(trelloColumn, addColumnButton);
               
                }

                return addColumnButton;
            }

            let addButtonColumn = _addButtonColumn();
            node.appendChild(addButtonColumn);

        })
        .catch((error) => {
            console.error(error);
        });
})();