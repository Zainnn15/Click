**User adding product to the cart (done by Sama)**

**Actor (User)**

User will add a product to the cart.

**Pre-conditions**

User has logged in the website.

**Main Flow**

- The user will search for his/her desired product.
- The system will show search related products.
- User will click on the desired product image.
- Product page will be opened.
- User will select the quantity.
- User will click on the “Add to Cart” button.
- Product will be added to cart
- The user will be able to see that product in his/her cart.


**Alternate Flows**
- If any connection issues arise before adding the product to cart, preventing the message to be sent before it times out:

  The system will add an error message, warning the user that the request was not sent and product was not added to the cart.

- If the selected product is out of stock:

  The user will be notified that this product is out of stock and cannot be added to the cart.

- If the user is not logged in:

  The user will be notified that he/she needs to log in first.

**Postconditions**

After the user adds a product to the cart, the product can be seen in the cart page and he/she can checkout and process payment to get it delivered. 
 


