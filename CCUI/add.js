// form data for the home page
const formData1 = new FormData()
// form data for the detailed page
const formData2 = new FormData()

const fileField = document.querySelector('input[type="file"]')
var headers = ["recipe_name", "description", "creator"]

var thelist = []
// use in both
var name = document.getElementById("recipe_name").value
thelist.push(name)
// only for home page
var desc = document.getElementById("description").value
thelist.push(desc)
//process ingredients properly (probably need to convert from string into a list to fit format)
/*var ing = document.getElementById("ingredients").value
thelist.push(ing)*/
//only for home page
var c = document.getElementById("creator").value
thelist.push(c)

for (let i=0; i<headers.length; i++){
  formData.append(headers[i], thelist[i])
}

fetch('http://127.0.0.1:5000/recipes', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
})





