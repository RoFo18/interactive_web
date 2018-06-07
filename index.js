var $tbody=document.getElementById("tbody");
// console.log(dataSet)

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < dataSet.length; i++) {
      // Get get the current address object and its fields
      var fried_chicken = dataSet[i];
      var fields = Object.keys(address);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = fried_chicken[field];
      }
    }
  }