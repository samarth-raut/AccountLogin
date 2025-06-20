Login Page Project

1. Skills Used
This Login Page is built using HTML, CSS, and JavaScript.
I focused on creating a responsive UI with a clean and user-friendly design.
JavaScript is used for form validation and to handle user authentication logic.

2. Data Storage Method
User information (name, email, and password) is securely handled using the browser's localStorage feature.

Here’s how it works:
- On the Sign-Up page, when the user enters their credentials and submits:
  localStorage.setItem("userName", name);
  localStorage.setItem("Email", mail);
  localStorage.setItem("Password", Key);

- On the Login page, when the user enters their credentials:
  The app checks the saved data:
  const LogUser = localStorage.getItem("Email");
  const logKey = localStorage.getItem("Password");
  If credentials match, the user is successfully logged in and redirected to the next page.

3. Key Features
Input validation for email and password
Real-time checks for valid domains (gmail.com, yahoo.com, outlook.com)
Uses localStorage to store and retrieve user data
Alerts the user if credentials do not match

4. How to Run Locally
Clone or download this repository.
Open the Sign.html file in your browser.
Create a new account.
Log in with the same credentials.

5. Future Improvements
Connect to a real backend and database
Implement stronger password hashing
Add a forgot password feature
Enhance UI with modern design libraries
