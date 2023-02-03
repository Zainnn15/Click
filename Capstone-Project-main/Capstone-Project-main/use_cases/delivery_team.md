## Deliver Order to customer (done by Zain)

### Actor (Delivery driver)
Delivery driver must pick up the given order from local groceries store and deliver to the customer

### Pre-conditions
Driver gets notification on phone that a customer has placed a order and must deliver it to the following address.

### Main Flow
1. The driver gets a notification on his/her phone that a customer has ordered and must be delivered.
2. Driver goes to the grocerie store customer has ordered from
3. Driver shows employee the order number and picks up the order
4. Driver goes to the given address from the app
5. Driver arrives and drops the order at the customer door and takes a picture
6. Driver sends the picture to the customer on the app to notify it has arrived
7. Driver repeats 1-6

### Alternate Flows
- If any connection issues arise, preventing the update to be sent before it times out: 
  1. The system will add an error message, warning the driver that the message was not sent.
- If a driver clicks on **Close**, instead of **Retry**:
  1. The messgae to the customer disappears, and no further action is taken by the system. The process of the order will remain.
- If The customer order is missing an item from the picked up order:
  1. The driver will check with the employee if they forgot to put it in. If they do not have it then the driver will notify the customer about the missing item and the customer will edit there order.

### Postconditions
Driver sends the picture to the customer on the app to notify it has arrived

