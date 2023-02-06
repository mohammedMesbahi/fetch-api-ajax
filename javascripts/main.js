const table = document.getElementsByTagName('table')[0]
const url = 'https://jsonplaceholder.typicode.com/users'
let rows = null;
fetch(url)
    .then(response => response.json())
    .then(json => {
        rows = json
        /* var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = "id";
            cell2.innerHTML = "name";
            cell3.innerHTML = "username";
            cell4.innerHTML = "email"; */
        rows.forEach((element,index) => {
            var row = table.insertRow(++index);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = element.id;
            cell2.innerHTML = element.name;
            cell3.innerHTML = element.username;
            cell4.innerHTML = element.email;
        })
    })



