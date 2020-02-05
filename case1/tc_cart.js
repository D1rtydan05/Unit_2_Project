"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Daniel Garcia
   Date:   2-4-20
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

for(var i = 0; i < item.length; i++){
   cartHTML += "<tr> <td><img src='tc_" + item[i] +".png' alt='item' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>"; // might need to fix
   var itemCost = itemPrice[i] * itemQty[i]; // might need to fix
   cartHTML += "<td>$" + itemCost + "</td></tr>"; //Dollar symbol where
   orderTotal += itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";

document.getElementById("cart").innerHTML = cartHTML;
