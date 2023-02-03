## Customers Is Missing An Item (done by Berhan)

### Actor (Customer)
Customer will successfully order gorceries on the website, and must be completed with a valid account.

### Pre-conditions
Customer should be logged in and should have an active order from the grocery store.

### Main Flow
1. The customer clicks on **View my Orders**.
2. The system will display all the orders made by the customer on this account.
4. The customer clicks on the order they realized has a missing item.
5. The system displays the possible types of issues.
6. The customer clicks on **Missing Item**
7. The system asks the customer to please describe the sistuation within the text box in 350 characters or less.
8. The customer completed the text and selects **Submit**.
9. The system will alert the grocery store to send a new pacakge to the customers address immediately.
10. The system will send the complaint to the grocery store for reviewing.

### Alternate Flows
- If customer accidently clicks **Cancel** instead of **Submit**.
 1. The system will give an pop up saying "Are you sure you want to cancel this missing item issue".

 - If customer system displays that the item is OUT OF STOCK
  1. The system will give an pop up saying "I'm sorry, Unfortunately this item is out of stock".
  2. The customer will have a choice to select through a new item to replace it or they can be given a refund for the price of that item.

### Postconditions
The grocery store reviews the missing item and alerts the customer with a refund or a new item send directly to them .
