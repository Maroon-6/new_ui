async function loadIntoTable(url, table) {
			const tableHead = table.querySelector("thead");
			const tableBody = table.querySelector("tbody");
			const rsp = await fetch(url);
			const data =await rsp.json();

			// make a fake json file out of the data
			x = data[0]
			var h = Object.keys(x)
			var r = []
			for(let i = 0; i < data.length; i++){
				console.log(data[i])
				y = Object.values(data[i])
				r.push(y)
			}
			
			var jsonf = { headers: h, rows: r}
			console.log(jsonf)
			const { headers, rows } = jsonf

			tableHead.innerHTML ="<tr></tr>";
			tableBody.innerHTML ="";

			// populate the headers
			for (const headerText of headers){
				const headerElement = document.createElement("th");

				headerElement.textContent = headerText;
				tableHead.querySelector("tr").appendChild(headerElement);
			}

			// populate the rows
			for (const row of rows) {
				const rowElement = document.createElement("tr");

				for (const cellText of row) {
					const cellElement = document.createElement("td");

					cellElement.textContent = cellText;
					rowElement.appendChild(cellElement);
				}
				tableBody.appendChild(rowElement);
			}
		}
		loadIntoTable("http://127.0.0.1:5000/recipes", document.querySelector("table"));

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}