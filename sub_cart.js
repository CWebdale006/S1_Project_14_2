"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Connor J Webdale 
   Date: 4.5.19 

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// Adds an event listener to run the setupCart() cuntion on load 
window.addEventListener("load", setupCart);

// Defines event handlers for the Add to Order buttons on the page. 
function setupCart() {
      // Contains the collection of elements belonging to the addButton class 
      var addButtons = document.querySelectorAll(".addButton");

      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}

// Adds items to the shoping cart on the page 
function addItem(e) {
      // Gets the description of the food item using the nextElementSibling property 
      var foodItem = e.target.nextElementSibling;

      // Contains the value of the id attribute for foodItem 
      var foodID = foodItem.id;

      // Creates a copy of the foodItem 
      var foodDescription = foodItem.cloneNode(true);

      // Gets the shopping cart by its ID 
      var cartBox = document.getElementById("cart");

      // Tests whether the customer has already ordered this product 
      var duplicateOrder = false;

      // Loops through the element child nodes of cartBox 
      for (var i = 0; i < cartBox.childNodes.length; i++) {
            // Checks if the ID of the element node is equal to foodID 
            if (cartBox.childNodes[i].id === foodID) {
                  // // Increases the value of the first element child of node by 1 
                  cartBox.childNodes[i].firstElementChild.textContent++;

                  // Changes dupliacteOrder to true so the order isn't added to cartBox twice 
                  duplicateOrder = true;

                  break;
            }
      }

      // Tests whether duplicateOrder is still false 
      if (duplicateOrder === false) {
            // Creates a variable storing a span element node 
            var orderCount = document.createElement("span");

            // Sets the text content of the orderCount element to 1 
            orderCount.textContent = 1;

            // Inserts orderCount as the first child of the foodDescription node 
            foodDescription.prepend(orderCount);

            // Appends foodDescriptino to cartBox as a new product order 
            cartBox.appendChild(foodDescription);
      }
}