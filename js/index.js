var sumbtn = document.getElementById("sumbtn");
var inputname = document.getElementById("inputname");
var inputurl = document.getElementById("inputurl");
var tbody = document.getElementById("tbody");
var deletebtn = document.getElementById("delete");
var visitbtn = document.getElementById("visit");
var ovarlaymn = document.querySelector(".overlay");
var closebtn = document.querySelector(".close-icon i");

var allproduct = [];

sumbtn.addEventListener("click", add);
if (localStorage.getItem("allproducts") != null) {
  allproduct = JSON.parse(localStorage.getItem("allproducts"));
  dispaly();
}

function add() {
  if ( vaild() && vaildmail()) {
    var product = {
      name: inputname.value.trim(), // Trim the input value for product name
      url: inputurl.value, // Get the product price
    };

    allproduct.push(product); // Add the new product to the product list

    // Save the updated product list to localStorage
    localStorage.setItem("allproducts", JSON.stringify(allproduct));

    dispaly(); // Display updated product data

    clearForm() // Clear the form fields
  }
  else{
    ovarlaymn.classList.add("appear");
  }
}



function dispaly() {
  var box = ``;
  for (var i = 0; i < allproduct.length; i++) {
    box += `
    <tr>
    <th>${i + 1}</th>
    <th>${allproduct[i].name}</th>
    <th><button type="button" class="btn btn-success" id="visit" onclick="visititem(${i})">
    <i class="fa-solid fa-eye"></i>
    Visit</button></th>
    <th><button type="button" class="btn btn-danger" id="delete" onclick="deletitem(${i})">
    <i class="fa-solid fa-trash-can"></i>
    Delete</button></th>
  </tr>
    
    `;
  }
  tbody.innerHTML = box;
}

function deletitem(index) {
  allproduct.splice(index, 1);
  localStorage.setItem("allproducts", JSON.stringify(allproduct));
  dispaly();
  clear();
}

function visititem(index) {
  window.open(allproduct[index].url);
}


function vaild() {
  var regex = /^[A-Z][a-z]{1,9}$/gm; // Regex to validate product name
  var text = inputname.value;
  if (regex.test(text)) {
    // Valid input
    inputname.classList.add("is-valid");
    inputname.classList.remove("is-invalid");
    return true;
  } else {
    // Invalid input
    inputname.classList.add("is-invalid");
    inputname.classList.remove("is-valid");
    return false;
  }
}

function vaildmail() {
  var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi; // Regex to validate product name
  var text = inputurl.value;
  if (regex.test(text)) {
    // Valid input
   inputurl.classList.add("is-valid");
   inputurl.classList.remove("is-invalid");
    return true;
  } else {
    // Invalid input
    inputurl.classList.add("is-invalid");
    inputurl.classList.remove("is-valid");
    return false;
  }
}

function clearForm() {
  inputname.value = null;
  inputurl.value = null;
 
  inputname.classList.remove("is-valid");
  inputurl.classList.remove("is-valid");

  inputname.classList.remove("is-invalid");
  inputurl.classList.remove("is-invalid");

  
 
}


function checking() {
  ovarlaymn.classList.remove("appear");
  ovarlaymn.classList.add("clear");
  inputname.classList.remove("is-invalid");
  inputurl.classList.remove("is-invalid");
}

sumbtn.addEventListener("click", vaild);
sumbtn.addEventListener("click", vaildmail);
closebtn.addEventListener("click", checking);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    checking();
  }
});
