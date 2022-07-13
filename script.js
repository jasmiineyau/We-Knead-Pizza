var home = document.querySelector("#home");
var pizza = document.querySelector("#pizza");
var drinksdesserts = document.querySelector("#drinksdesserts");
var appetizer = document.querySelector("#appetizer");
var shop = document.querySelector("#shop");
var sundaes = document.querySelector("#sundaes");

var totalPrice = 0;

var visiblePage = home;

function showHome() {
    if (visiblePage != home) {
        visiblePage.style.display = "none";
        home.style.display = "block";
        visiblePage = home;
    }
}

function showPizza() {
    if (visiblePage != pizza) {
        visiblePage.style.display = "none";
        pizza.style.display = "block";
        visiblePage = pizza;
    }
}

function showDrinksDesserts() {
    if (visiblePage != drinksdesserts) {
        visiblePage.style.display = "none";
        drinksdesserts.style.display = "block";
        visiblePage = drinksdesserts;
    }
}

function showAppetizer() {
    if (visiblePage != appetizer) {
        visiblePage.style.display = "none";
        appetizer.style.display = "block";
        visiblePage = appetizer;
    }
}

function showShop() {
    if (visiblePage != shop) {
        visiblePage.style.display = "none";
        shop.style.display = "block";
        visiblePage = shop;
    }
}


function orderItems(item, price) {
    var cwQuestion = confirm("Add to cart?");
    if (cwQuestion == true) {
        totalPrice = totalPrice + price;
        alert("Added to cart.");
        document.getElementById("price").innerHTML = "Total Price = $" + totalPrice + ".00";
        // https://www.w3schools.com/Jsref/met_node_appendchild.asp
        // Create an "li" node:
        const node = document.createElement("li");
        // Create a text node:
        const textnode = document.createTextNode(item);
        // Append the text node to the "li" node:
        node.appendChild(textnode);
        // Append the "li" node to the list:
        document.getElementById("list").appendChild(node);

    } else {
        alert("Not added in cart.");
    }
}

function pay(min, max) {    
    var card = document.getElementById("paymentMethod").value;
    alert("Please pay " + totalPrice + ".00 using " + card + ".");
    prompt("Please input your pickup address.");
    // Making the random time amount:
    var time = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("Your order will arrive in " + time + " minutes.");
    alert("Bon appetit!");
}

mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}