# 10_Authentication_State_Management

🎥 Timestamp: 3:43:33 - 4:46:33

---

# 🎯 Goal of Today

Connect the Login and Signup forms with the backend, manage authentication state using Redux Toolkit, and prepare file upload functionality using Multer.

---

# 🛠️ What I Did Today

## 1. Managed Login & Signup Form Data

Used **useState()** to store user input.

Handled:

- Full Name
- Email
- Password
- Phone Number
- Role
- Profile Photo

Created Event Handlers:

- handleChange()
- handleFileChange()

These functions update the form data whenever the user enters information or selects a file.

---

## 2. Created Constants File

Created:

src/
└── utils/
      └── constant.js

Stored backend API endpoints.

Example:

- USER_API_ENDPOINT

This avoids writing the same API URL multiple times.

---

## 3. Setup Multer

Installed Multer.

Created:

backend/
└── middlewares/
      └── storage.js

Configured Multer for handling file uploads.

Used it to upload profile images during user registration.

---

## 4. Setup Redux Toolkit

Installed:

- @reduxjs/toolkit
- react-redux

Created:

src/
└── redux/
      ├── store.js
      └── authSlice.js

Configured Redux Store for global state management.

Created Authentication Slice to store logged-in user information.

---

# 💡 Key Concepts Learned

## useState()

Stores and updates form data dynamically.

---

## Event Handlers

Used to update input fields and file data.

---

## constant.js

Stores API URLs in one place.

---

## Multer

Middleware used for uploading files from the client to the server.

Uploaded file is available inside:

req.file

---

## Redux Toolkit

Used for centralized state management.

---

## authSlice

Stores authentication-related data like the logged-in user.

---

## store.js

Creates the Redux Store and connects all slices.

---

# 🔄 Flow

User
      ↓
Enter Login / Signup Details
      ↓
useState()
      ↓
handleChange()
      ↓
Select Profile Image
      ↓
handleFileChange()
      ↓
Axios Request
      ↓
Backend API
      ↓
Multer Processes File
      ↓
Controller
      ↓
MongoDB
      ↓
Redux Store Updated
      ↓
UI Updated

---

# 🎤 Interview Questions

### 1. Why did you use useState()?

To store and update form data dynamically.

---

### 2. What is handleChange()?

It updates the state whenever the user changes an input field.

---

### 3. Why did you create constant.js?

To store API endpoints in one place and avoid hardcoding URLs.

---

### 4. What is Multer?

Multer is an Express middleware used for uploading files.

---

### 5. Why did you use Multer?

To upload profile images during user registration.

---

### 6. What is Redux Toolkit?

Redux Toolkit is used to manage application state efficiently.

---

### 7. What is authSlice?

It stores authentication-related data such as the logged-in user.

---

### 8. Why do we use store.js?

It creates the Redux Store and manages the application's global state.

---

# ⚡ Quick Revision

✅ Login Form

✅ Signup Form

✅ useState()

✅ handleChange()

✅ handleFileChange()

✅ constant.js

✅ USER_API_ENDPOINT

✅ Multer Setup

✅ storage.js

✅ Redux Toolkit

✅ store.js

✅ authSlice.js