# 💼 MERN Job Portal

A full-stack job portal built with the **MERN Stack**, designed to connect candidates and recruiters through a role-based platform for job discovery, recruitment, applications, and profile management.

## 🚀 Features

* 👤 **Role-Based Access** — Separate Candidate and Recruiter workflows
* 🔐 **JWT Authentication & Authorization**
* 🔎 **Job Search & Job Management**
* 🏢 **Company Management**
* 📄 **Job Applications & Application Tracking**
* 👨‍💼 **Candidate & Recruiter Profiles**
* 📤 **Resume/Profile Uploads using Cloudinary**
* 🛡️ **Protected Routes & Middleware Authorization**
* 📊 **Admin Dashboard**
* 🔌 **RESTful API Architecture**

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST APIs
* JWT
* Middleware

### Database & Services

* MongoDB
* Cloudinary

## 📂 Project Structure

```text
mern-job-portal/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   └── ...
│
└── README.md
```

## 🔑 Authentication

The application uses **JWT-based authentication** with middleware-protected routes and role-based authorization for different users.

## 🔌 REST APIs

The backend provides APIs for:

* User Authentication
* User Profiles
* Jobs
* Companies
* Applications
* Resume/Profile Management

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/adarshmulik10051-dev/mern-job-portal.git
cd mern-job-portal
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure Environment Variables

Create `.env` files and add the required configuration for:

```text
MongoDB
JWT Secret
Cloudinary
API URLs
```

### 4. Run the application

Start the backend and frontend development servers.

```bash
npm run dev
```

## 📸 Screenshots



* Login / Signup <img width="1915" height="862" alt="image" src="https://github.com/user-attachments/assets/d168de05-4847-4587-bdb8-0166a88150b5" />
* Job Search <img width="1909" height="852" alt="image" src="https://github.com/user-attachments/assets/d07edb1a-1ece-45e7-9c11-1dbd7bb727e0" />
* Job Details <img width="1892" height="771" alt="image" src="https://github.com/user-attachments/assets/af273759-1c03-46c3-ae08-848ccd452130" />
* user profile <img width="1885" height="849" alt="image" src="https://github.com/user-attachments/assets/955ea91a-7e0f-4ef8-9744-b5b78471137e" />
* job Dashboard <img width="1880" height="857" alt="image" src="https://github.com/user-attachments/assets/41c30485-5228-41b4-ad61-13f34b606bbe" />



## 🌐 Live Demo

🔗 **Live Demo:**  https://mern-job-portal-2wbq.onrender.com .

## 📌 What I Learned

* Building a full-stack MERN application from scratch
* Designing and integrating REST APIs
* Implementing JWT authentication and role-based authorization
* Managing application state using Redux Toolkit
* Working with MongoDB data models
* Handling file uploads with Cloudinary
* Structuring scalable frontend and backend code

## 👨‍💻 Author

**Adarsh Mulik**

* 💼 LinkedIn: [Adarsh Mulik](https://www.linkedin.com/in/adarsh-ashok-mulik-7b3044296)
* 🐙 GitHub: [adarshmulik10051-dev](https://github.com/adarshmulik10051-dev)

---

⭐ If you found this project useful, consider giving it a star!
