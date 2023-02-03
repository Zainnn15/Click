## Customers Adding a Complaint (done by Rupin)

### Actor (Customer)
Customers that buy products from the grocery store and with a valid account in the system.

### Pre-conditions
Customer should be logged in and should have ordered something from the grocery store.

### Main Flow
1. The customer clicks on **View my Orders**.
2. The system loads a list of all the products that you bought in the past.
3. The customer clicks on the order they want add a complaint about.
4. The system loads a text box where the customer can add his/her complaint about the product.
5. The customer clicks **Submit Complaint**.
6. The system will send the complaint to the grocery store for reviewing.

### Alternate Flows
- If customer accidently clicks **Cancel** instead of **Submit Complaint**.
  1. The system will give an pop up saying "Are you sure you want to disgard this complaint".
- If the customer adds a complaint after the return policy date. 
  1. The system will give an error message saying "Can not add complaint. The order has passed the return policy date".

### Postconditions
The grocery store reviews the complaint and provides the customer with a refund or new product.
