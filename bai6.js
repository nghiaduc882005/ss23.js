function createMultiplicationTable(number) {
    var table = document.createElement("table");

    for (var i = 1; i <= 9; i++) {
      var row = table.insertRow();

      var cell = row.insertCell();
      cell.innerHTML = i + " x " + number + " = " + i * number;
    }

    var lastRow = table.insertRow();
    var lastCell = lastRow.insertCell();
    lastCell.innerHTML = "3 x " + number + " = " + 3 * number;

    document.body.appendChild(table);
  }

  createMultiplicationTable(1);
  createMultiplicationTable(2);
  createMultiplicationTable(3);


