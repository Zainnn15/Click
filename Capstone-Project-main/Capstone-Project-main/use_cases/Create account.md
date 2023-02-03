**Customers Create an Account (done by Sama)**

**Actor (User)**

User will create an account on the website.

**Pre-conditions**

User has come to the landing/home page of the website.

**Main Flow**

- The user will click on the sign-up button.
- A form will be opened to get user details.
- User will enter his/her details.
- An OTP will be sent to user’s email 
- User will enter the correct OTP.
- User account will be made and he/she will be signed-in to start shopping.

**Alternate Flows**

- If any connection issues arise, preventing the message to be sent before it times out:

The system will add an error message, warning the user that the request was not sent.

- If a user clicks on Close, instead of Submit:

Home page opens up.

- The user enters wrong OTP

The system will add an error message, warning the user that the OTP was incorrect and the request was not sent.

**Postconditions**

After the user has successfully requested for sign-up, a user account will be made and he/she will start shopping.
 


