var fetchApiData = function (url, callback) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return callback(data);
    })
    .catch(function (error) {
      return console.error(error);
    });
};
var createTable = function (data) {
  var table = document.createElement("table");
  var headers = Object.keys(data[0]);
  var headerRow = document.createElement("tr");
  headers.forEach(function (header) {
    var th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  data.forEach(function (rowData) {
    var row = document.createElement("tr");
    headers.forEach(function (header) {
      var cell = document.createElement("td");
      cell.textContent = rowData[header];
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  document.body.appendChild(table);
};
var API_URL = "https://jsonplaceholder.typicode.com/users";
fetchApiData(API_URL, createTable);
