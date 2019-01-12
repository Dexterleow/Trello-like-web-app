
const rowColumns = document.querySelector('.row__columns');

(function _fetchAndPopulateData(self) {

    fetch(`http://localhost:3000/columns`)
        .then((response) => response.text())
        .then((responseText) => {
            // console.log(responseText);
            const list = JSON.parse(responseText);
            // console.log(list);

            list.forEach(column => {
                // console.log(column, "rendering column??");
                let trelloColumn = document.createElement('trello-column');
                rowColumns.appendChild(trelloColumn);
                trelloColumn.getColumnData(column);
            });
        })
        .catch((error) => {
            console.error(error);
        });
})();