"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Daniel Garcia
   Date:   2-4-20
   
   Filename: tc_cart.js
	
*/
// Total variable
var orderTotal = 0;

// da big ol fat HTML code plugin
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

// the FATTEST loop just to add the item, picture, price, description, and quantity
for(var i = 0; i < item.length; i++){
   cartHTML += "<tr> <td><img src='tc_" + item[i] +".png' alt='item' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>"; // might need to fix
   var itemCost = itemPrice[i] * itemQty[i]; // might need to fix
   cartHTML += "<td>$" + itemCost + "</td></tr>"; //Dollar symbol where
   orderTotal += itemCost;
}

//finishes up the table
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

//shows the shopping list
document.getElementById("cart").innerHTML = cartHTML;
