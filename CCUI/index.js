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
			console.log("this is what it looks like now " + jsonf)
			console.log(typeof(jsonf))
			const { headers, rows } = jsonf
			headers.push("Details...")

			tableHead.innerHTML ="<tr></tr>";
			tableBody.innerHTML ="";

			// populate the headers
			for (var headerText of headers){
				const headerElement = document.createElement("th");
				// change the titles
				headerElement.textContent = headerText;
				if (headerText == "recipe_name"){
					headerText = "Cocktail"
					headerElement.textContent = headerText;
				}
				else if (headerText == "description"){
					headerText = "Description"
					headerElement.textContent = headerText;
				}
				else if (headerText == "contributor"){
					headerText = "Contributor"
					headerElement.textContent = headerText;
				}
				tableHead.querySelector("tr").appendChild(headerElement);
			}

			// populate the rows
			for (const row of rows) {
				console.log(row)
				console.log(row[0])
				row.push("Recipe")

				const rowElement = document.createElement("tr");

				for (var cellText of row) {
					const cellElement = document.createElement("td");

					// get name of the cocktail to append on url
					if (cellText == row[0]){
						var name = row[0]
					}
					
					if (cellText == row[3]){
						ns=name.replace(/\s+/g, '')
						console.log(cellText)
						var url = String("https://daw6nkr6vd.execute-api.us-east-1.amazonaws.com/Dev/recipes" + "/" + ns) 
						console.log(url)
						var link = document.createElement("a");
						link.setAttribute("href", url)
						link.className = "links";
						var linkText = document.createTextNode(cellText);
						link.appendChild(linkText);

						// Add the link to the previously created TableCell.
						rowElement.appendChild(link);
					}
					else{
						cellElement.textContent = cellText;
						rowElement.appendChild(cellElement);
						console.log("hello " + cellText)
					}

				}
				tableBody.appendChild(rowElement);
			}
		}
		loadIntoTable("https://daw6nkr6vd.execute-api.us-east-1.amazonaws.com/Dev/recipes", document.querySelector("table"));

		function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");


  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
  	console.log(tr)
  	td = tr[i].getElementsByTagName("td")[0];
  	console.log(td)
  	if (td) {
  		txtValue = td.textContent || td.innerText;
  		console.log(txtValue)
  		if (txtValue.toUpperCase().indexOf(filter) > -1) {
  			tr[i].style.display = "";
  		} else {
  			tr[i].style.display = "none";
  		}
  	}
  }
}