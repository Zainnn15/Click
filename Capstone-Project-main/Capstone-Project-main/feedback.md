## Task 2 (18/20)

### Project Charter (15/15)*2/3

#### Introduction
Really well done! Consider adding functionality for employees/managers to update stock.

#### Overview
PErfect. Try using a more decisive language in the future: "developping" instead or "going to develop" or "planning to develop"

### Technical Details (12/15)*2/3
- You can remvoe the HTML/CSS section
- Should probably consider using React or Angular for the Front-End UI. That said, React is probably a better option given that the app is using React Native.
- There are extra words at the beginning of the first sentece of developing tools (, Bootstrap, and JQuery libraries)

## Task 3

### Use Cases
- **Customers Create an Account (done by Sama)** - 10/10 - Perfect! In the future, always spell out acronyms such as OTP the first time you use them in a text.
- **Employees/Managers editing items/product inventory (done by Rupin)** - 9/10 - Well done! It is not clear what happens after step 4. Does the system loads the list of items again, or does it stay in the view showing the item that was jsut tagged as out of stock. This type of detail is important because it guides the coding. -1 I beleive this use case is for when there has been a mistake and an item was not properly updated. I would expect the system, in normal conditions, to keep track of items automatically. (no deduction)
- **Customer will create order (done by Berhan)** - 7/10 - Main flow only covers the actions from the user, not the responses from the system -2. The second alternate flow is incomplete. -1
- **Deliver Order to customer (done by Zain)** - 6/10 - Main flow only covers the actions from the user, not the responses from the system -2. I would expect the client to be able to get an update on the status of the order, as a result of the actions of the driver -1 There should be more postconditions than just a picture being taken. For example, the database will be updated. -1

### Milestones (4/5)
- Remove milestones 2, 3, and 4
- For remaining  milestones, make sure that it is clear that we are talking about designing and testing

### Deliverables (4/5)
- The proposed deliverables are not real deliverables

#### Example:
- Milestone: Design and testing of a refunding order functionality completed
- Deliverable: Refunding order functionality up and running (or pushed to production, or available to clients)


## Task 4

### Risks, Assumptions, and Constraints (4.5/5)
Almost Perfect! The first assumption is merely a rewording of the second risk. It is fine to have it, as is, in either palce. But, it is not fine to have both of them.

### README.md (5/5)
No changes requested

### Use Cases
- **Customers Adding a Complaint (done by Rupin)** - Amost perfect! (9/10) - The postocondition skips a step. The complaint gets stored in the system's database. Then, and only then, the store can act on it. -1
- **Customers Is Missing An Item (done by Berhan)** - Well done! (8/10) - The actor should simply be a costumer. That this customer has an account and has ordered groceries should be listed as preconditions. -1.5 Item 8 states that the missing item will be sent immediately, but the postconditions alert that it will either be sent or refunded. Postoconditions should always refer to the main flow (not alternate flows) -0.5
- **User adding product to the cart (done by Sama)** Perfect (10/10) - I believe the user should be able to add a product to the cart, and set its quantity, without having to first go to the product details page. The less required clicks, the better the UI.
- **Customers Reviewing products (done by Zain)** - (6.5/10) The actor should simply be a customer. That this customer has purchased groceries should be listed as preconditions. -1.5 The main flow is confusing. As it starts with the users clicking on Purchase, I thought it was about reviewing their order. But, later, the main flow makes it seems like the customer is giving feedback on the delivery. -1 The postcondition skips a step. The review gets stored in the system's database. Then, and only then, the store can act on it. -1

