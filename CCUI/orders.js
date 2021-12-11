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

	// TODO: Incorporate OAuth and remove user and address columns
	for (var headerText of headers){
		const headerElement = document.createElement("th");
		
		// change the titles
		headerElement.textContent = headerText;

		if (headerText == "order_id"){
			headerText = "Order ID"
			headerElement.textContent = headerText;
			console.log("HI")
		}
		else if (headerText == "user_id"){
			headerText = "User ID"
			console.log(headerText)
			headerElement.textContent = headerText;
			console.log(headerElement)
			console.log("WHY")
		}
		else if (headerText == "address_id"){
			headerText = "Address ID"
			headerElement.textContent = headerText;
		}
		else if (headerText == "total_price"){
			headerText = "Total"
			headerElement.textContent = headerText;
		}
		else if (headerText == "status"){
			headerText = "Status"
			headerElement.textContent = headerText;
		}
		tableHead.querySelector("tr").appendChild(headerElement);
	}

	// populate rows
	for (const row of rows) {
		const rowElement = document.createElement("tr");

		for (var cellText of row) {
			const cellElement = document.createElement("td");
			// add currency for prices
			if (cellText == row[3]) {
				cellText = "$" + cellText
			}
			cellElement.textContent = cellText;
			rowElement.appendChild(cellElement);
			console.log("hello " + cellText)
		}
		tableBody.appendChild(rowElement);
	}
}
	loadIntoTable("https://daw6nkr6vd.execute-api.us-east-1.amazonaws.com/Dev/orders", document.querySelector("table"));