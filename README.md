# Basic Login and Signup Form using HTML, CSS and JavaScript

This project is a basic login and signup form system built using HTML, CSS, and JavaScript. It stores user data in the browser's local storage. The project allows users to sign up with an email and password, validates existing users during login, and prevents duplicate email registrations.

---

# Features

- Sign up with name, email, and password
- Prevents duplicate email registrations
- Login functionality with redirect on success
- Data stored using browser's local storage
- No backend or database required
- Multiple HTML pages for login, signup, and welcome

---

# How It Works

1. The user signs up through the signup page.
2. If the email is already stored, a message appears saying it already exists.
3. On successful signup, the data is saved in local storage.
4. The user logs in using the login page.
5. If credentials match, the user is redirected to the welcome page.

---

# Project Folder Structure

LoginDesign/
├── index.html
├── README.md
├── package.json
├── assets/
│   ├── G.jpg
│   ├── G2.jpg
│   ├── G3.jpg
│   ├── G4.jpg
│   └── image.png
├── HtmlFiles/
│   ├── Hello.html
│   ├── LoggedFile.html
│   ├── Log.css
│   ├── Sign.html
│   └── Sign.css
├── JavascriptFile/
│   ├── userInterface.js
│   ├── ValidationLog.js
│   └── ValidationSing.js
