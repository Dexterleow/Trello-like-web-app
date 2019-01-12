
function _fetchAndPopulateData(self) {

    console.log("is this fetch function running");

    fetch(`http://localhost:3000/columns`)
        .then((response) => response.text())
        .then((responseText) => {
            const list = JSON.parse(responseText);
        })
        .catch((error) => {
            console.error(error);
        });
}

_fetchAndPopulateData();

