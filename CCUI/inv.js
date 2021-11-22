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

			tableHead.innerHTML ="<tr></tr>";
			tableBody.innerHTML ="";
			console.log(headers)
			// populate the headers
			headers.splice(5,1)
			for (var headerText of headers){
				const headerElement = document.createElement("th");
				// change the titles
				headerElement.textContent = headerText;
				if (headerText == "inventory_id"){
					headerText = "ID"
					headerElement.textContent = headerText;
				}
				else if (headerText == "inventory_name"){
					headerText = "Name"
					headerElement.textContent = headerText;
				}
				else if (headerText == "ingredient_name"){
					headerText = "Ingredient"
					headerElement.textContent = headerText;
				}
				else if (headerText == "brand"){
					headerText = "Brand"
					headerElement.textContent = headerText;
				}
				else if (headerText == "measurement_qty"){
					headerText = "Quantity"
					headerElement.textContent = headerText;
				}
				else if (headerText == "in_stock"){
					headerText = "In stock"
					headerElement.textContent = headerText;
				}
				else if (headerText == "price"){
					headerText = "Price"
					headerElement.textContent = headerText;
				}

				tableHead.querySelector("tr").appendChild(headerElement);
			}
			console.log("hello" + String(rows[1][4]))
			console.log(rows)
			var x = rows.map(function(val) {
				console.log(val[4])
				val[4] = val[4]+val[5]
				console.log(val[4])
				val.splice(5, 1)
				console.log("hi" + val)
				return val;
			});
			// populate the rows
			for (const row of rows) {
				const rowElement = document.createElement("tr");

				for (const cellText of row) {
					const cellElement = document.createElement("td");

					cellElement.textContent = cellText;
					rowElement.appendChild(cellElement);
					console.log("hello " + cellText)
				}
				tableBody.appendChild(rowElement);
			}
		}
		loadIntoTable("http://127.0.0.1:5000/inventories", document.querySelector("table"));