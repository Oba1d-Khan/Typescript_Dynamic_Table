type Data = {
  [key: string]: any;
};

const fetchApiData = (url: string, callback: (data: Data[]) => void) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error));
};

const createTable = (data: Data[]) => {
  const table = document.createElement("table");
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  data.forEach((rowData) => {
    const row = document.createElement("tr");
    headers.forEach((header) => {
      const cell = document.createElement("td");
      cell.textContent = rowData[header];
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  document.body.appendChild(table);
};

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetchApiData(API_URL, createTable);
