## Employees/Managers editing items/product inventory (done by Rupin)

### Actor (Employees/Managers)
Employees/Managers that are currently working at the grocery store and with a valid account in the system.

### Pre-conditions
Employees/Managers work at the grocery store and are logged into the system. 

### Main Flow
1. The employee/manager clicks on **All Products**.
2. The system loads a list of all the products that are currently in stock in the grocery store.
3. The employee/manager clicks on **Out Of Stock**.
4. The system changes the item that was clicked from in stock to out of stock.
5. The employee/manager repeats until all of the stock is updated.
6. The employee/manager clicks the **Update** button.
7. The system will successfully update the website and all the customers will be able to see the updated website.

### Alternate Flows
- If employees/managers forget to update the stock.
  1. The system will alert the employees/managers to check the stock (This alert is given every hour).
- If the employee accidently updates a stock that is still in stock (When there is 50 or more items).
  1. The system will give a message saying "are you sure" to make sure if it was an accident or not.

### Postconditions
After the system is updated with the correct stock the customers can buy the items without worrying about the items being out of stock.
