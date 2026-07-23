# 11_Main_User_Interface

🎥 Timestamp: 4:46:33 - 6:39:06

---

# 🎯 Goal of Today

Build the main user-facing pages and reusable UI components of the Job Portal.

---

# 🛠️ What I Built Today

## 1. Home Page

Created the main Home Page.

It contains:

- Hero Section
- Latest Jobs Section
- Latest Job Cards
- Footer

---

## 2. Hero Section

Created a Hero Section for the Home Page.

It provides the main introduction and helps users navigate/search for jobs.

---

## 3. Latest Jobs

Created a section to display the latest available jobs.

---

## 4. Job Card

Created a reusable `Job` / `JobCard` component to display job information.

The same component can be reused for multiple jobs.

---

## 5. Footer

Created a reusable Footer component for the application.

---

## 6. Jobs Page

Created the Jobs Page to display available job listings.

---

## 7. Filter Card

Created a Filter Card component for filtering jobs based on different criteria.

The actual filter functionality will be implemented later.

---

## 8. Browse Page

Created the Browse Page where users can browse available jobs.

---

## 9. Profile Page

Created the User Profile Page to display user information.

---

## 10. Job Details Page

Created the Job Details Page to display complete information about a selected job.

---

## 11. Update Profile Dialog

Created a dialog component to update user profile information.

---

# 💡 Key Concepts Learned

## Reusable Components

Instead of writing the same UI code multiple times, reusable components like `JobCard`, `Navbar`, and `Footer` can be created and reused.

---

## Component Composition

A large page is divided into smaller components.

Example:

Home Page
   ↓
Hero Section
   ↓
Latest Jobs
   ↓
Job Card
   ↓
Footer

---

## Props

Props are used to pass data from a parent component to a child component.

Example:

```text
Jobs Page
    ↓
Job Card
    ↓
Job Information
```

---

## React Router

Used to navigate between different pages of the Job Portal without reloading the entire application.

---

# 🔄 Page Flow

```text
Navbar
   ↓
Home
   ├── Hero Section
   ├── Latest Jobs
   │      └── Job Card
   └── Footer

Jobs
   ↓
Browse
   ↓
Job Details
   ↓
Apply Job

Profile
   ↓
Update Profile Dialog
```

> Note: At this stage, most pages are UI/template based. Functional logic such as filtering, applying for jobs, searching, and updating profiles is implemented in later stages.

---

# 🎤 Interview Questions

### 1. Why did you create reusable components?

To avoid code duplication and make the application easier to maintain and reuse.

---

### 2. Why did you create a separate Job Card component?

Because multiple jobs have the same UI structure. A reusable Job Card allows us to display different job data using the same component.

---

### 3. What are Props in React?

Props are used to pass data from a parent component to a child component.

---

### 4. Why did you divide the UI into multiple components?

To keep the code modular, reusable, maintainable, and easier to understand.

---

### 5. Why did you create a separate Footer component?

The Footer is reusable across multiple pages, so creating a separate component avoids repeating the same code.

---

### 6. What is the purpose of the Job Details Page?

It displays complete information about a selected job and allows the user to view details before applying.

---

### 7. What is the purpose of the Filter Card?

It provides filter options that help users find relevant jobs based on criteria such as location, salary, or job type.

---

### 8. What is the purpose of the Update Profile Dialog?

It allows the logged-in user to update their profile information without navigating to a separate page.

---

### 9. How do you navigate between pages in React?

Using React Router and routes configured for different pages.

---

### 10. What is Component Composition?

Component Composition means building a large UI by combining smaller reusable components.

For example:

```text
Home
 ├── Hero
 ├── LatestJobs
 │      └── JobCard
 └── Footer
```

---

# ⚡ Quick Revision

✅ Home Page

✅ Hero Section

✅ Latest Jobs

✅ Reusable Job Card

✅ Footer

✅ Jobs Page

✅ Filter Card

✅ Browse Page

✅ Profile Page

✅ Job Details Page

✅ Update Profile Dialog

✅ Reusable Components

✅ Props

✅ Component Composition

✅ React Router

---

# 🧠 Interview Summary

In this phase, I built the main frontend UI of the Job Portal using reusable React components. I created the Home, Jobs, Browse, Profile, and Job Details pages along with reusable components such as Navbar, Job Card, Footer, Filter Card, and Update Profile Dialog. The initial focus was on creating the UI structure, while the actual business logic and API integration were implemented in later stages.