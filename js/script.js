//form validation function
function validateForm() {
  var x = document.forms["contact"]["email"].value;
  if (x == "") {
    window.alert("Email must be filled out so that we are able to get back in touch with you.");
    return false;
  }
}




//back to top button functions
mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};
//function which will display the button when user scrolls down more than 20px
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}




//Ticket calculator funcion
function calculateTickets(sel) {
  sel.form.ticketTotal.value = sel.value * sel.form.ticketPrice.value;
  }





//random fact generator
var factPlaceholder = document.getElementById("bee-fact");
var displayFact = document.getElementById("display-fact");


var beeFacts = ["All worker bees are female.",
               "A bee produces a teaspoon of honey (about 5 grams) in her lifetime",
               "Bees love blue and love cluster plants like lavender and rosemary",
               "The bee is the only social insect to be partially domesticated by humans.",
               ]

var factNumber;

function randomFact(){
  return beeFacts[factNumber];
}

displayFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*4);
  factPlaceholder.textContent = randomFact();
});















