const table = document.getElementsByTagName('table')[0]
const url = 'https://jsonplaceholder.typicode.com/users'
let rows = null;

/* fetch(url)
    .then(response => response.json())
    .then(json => {
        rows = json
        var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = "id";
            cell2.innerHTML = "name";
            cell3.innerHTML = "username";
            cell4.innerHTML = "email";
        rows.forEach((element, index) => {
            var row = table.insertRow(++index);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.textContent = element.id;
            cell2.textContent = element.name;
            cell3.textContent = element.username;
            cell4.textContent = element.email;
        })
    })
 */
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const rows = JSON.parse(this.response)
        rows.forEach((element, index) => {
            var row = table.insertRow(++index);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.textContent = element.id;
            cell2.textContent = element.name;
            cell3.textContent = element.username;
            cell4.textContent = element.email;
        })
    }
};
xhttp.open("GET", url, true);
xhttp.send();


