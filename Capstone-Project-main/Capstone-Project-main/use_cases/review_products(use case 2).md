## Customers Reviewing products (done by Zain)
### Actor (Customer)
Customers that just purchased there products from the website and have an account in the system.

### Pre-conditions
Customer should be logged in and ordered something from the grocery store.

### Main Flow
The customer clicks Purchase on the order they made.

The system runs through the payment process and tells the customer it was a sucess. It will show a pop up asking the customer to review their delivery service, website and purchased products.

The customer clicks yes on the pop up to give a review.

The system loads up a box that gives a star rating pop up and a text box under it so they can leave a review.

The customer gives a star rating and writes a review then submits the Review.

The system will upload the review in the database and it will be checked.

### Alternate Flows
1. Customer clicks No on the pop up.

The system will give another pop up saying "Are you sure you do not want to a review".

2. The customer gives a star rating but leaves the text box blank then submits the Review.

The system will give a error pop up and say "Please leave a review in the textbox"
### Postconditions
The grocery store will check all the reviews and see what they can do with the feedback.
