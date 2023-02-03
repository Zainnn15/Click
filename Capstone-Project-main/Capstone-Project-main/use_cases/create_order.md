## Customer will create order (done by Berhan)

### Actor (Customer)
User will successfully order groceries on the website 

### Pre-conditions
User has created an existing account on the website

### Main Flow
1. The user will click on the **login 
2. The user will enter username and password and successfully login
3. The user will select the groceries they would like to purchase and add them to cart
4. The user will add the correct shipping information to receive their groceries
5. User will have to add payment method for checkout
6. The user will successfully checkout their groceries

### Alternate Flows

- If any connection issues arise, preventing the message to be sent before it times out: 
  1. The system will add an error message, warning the user that the shipping address is not valid, effectively sending him/her back to step 4
  2. The system will add an error message, warning the user that the payment method is not valid, effectively sending him/her back to step 5

### Postconditions
Once the customer has successfully registered and created an account, they will receive a confirmation email to validate registration.
