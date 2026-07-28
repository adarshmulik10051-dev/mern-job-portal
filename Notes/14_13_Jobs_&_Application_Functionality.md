# 13_Jobs_&_Application_Functionality

🎯 Goal of Today

Fetch jobs dynamically from the backend and implement job details and job application functionality.

---

# 🛠️ What I Did Today

## 1. Created Job Slice

Created:

src/
└── redux/
      └── jobSlice.js

Used Redux to manage job-related state.

---

## 2. Get All Jobs

Fetched all available jobs from the backend API.

The jobs are stored in Redux and displayed dynamically.

---

## 3. Dynamic Jobs on Home Page

Connected the Home Page with the backend.

Latest jobs are now fetched from the database and displayed dynamically instead of using static data.

---

## 4. Dynamic Single Job Details

Implemented dynamic Job Details Page.

When the user selects a job, the application fetches and displays details of that specific job.

---

## 5. Apply Job

Implemented the Apply Job functionality.

A logged-in user can apply for a job.

---

## 6. Real-Time UI Update

After applying for a job, the UI updates immediately without requiring a full page refresh.

---

# 💡 Key Concepts Learned

### Redux Slice

A slice manages a specific part of the application's state.

`jobSlice.js` manages job-related data.

### Dynamic Data

Data is fetched from the backend/database instead of being hardcoded in the frontend.

### API Integration

Frontend communicates with backend APIs to fetch jobs and apply for jobs.

### Real-Time UI Update

The UI state is updated immediately after an action, giving the user instant feedback.

---

# 🔄 Flow

Get All Jobs:

Backend API
      ↓
Frontend Request
      ↓
jobSlice
      ↓
Redux Store
      ↓
Home / Jobs Page
      ↓
Display Jobs

Apply Job:

User Clicks Apply
      ↓
API Request
      ↓
Backend
      ↓
Application Created
      ↓
Redux State Updated
      ↓
UI Updated

---

# 🎤 Interview Questions

### 1. Why did you create jobSlice.js?

To manage job-related data and state using Redux Toolkit.

### 2. How are jobs displayed dynamically?

The frontend fetches job data from the backend API and renders the received data instead of using static data.

### 3. How does the Job Details Page work?

The selected job ID is used to fetch the specific job details from the backend and display them dynamically.

### 4. How does Apply Job work?

The logged-in user clicks Apply, the frontend sends an API request to the backend, and the backend creates an application record.

### 5. What is a real-time UI update?

The UI state is updated immediately after an action, so the user sees the latest result without refreshing the page.

---

# ⚡ Quick Revision

✅ jobSlice.js

✅ Get All Jobs API

✅ Dynamic Home Jobs

✅ Dynamic Job Details

✅ Apply Job

✅ Real-Time UI Update

✅ Redux State Management