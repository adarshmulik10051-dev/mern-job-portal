# 12_File_Upload_Cloudinary

🎯 Goal of Today

Implement file upload functionality for profile pictures and resume files using Data URI Parser and Cloudinary.

---

# 🛠️ What I Did Today

## 1. Installed Data URI Parser

Installed:

npm install datauri

Used Data URI Parser to convert uploaded files into a format that can be uploaded to Cloudinary.

---

## 2. Setup Cloudinary

Configured Cloudinary for cloud-based file storage.

Cloudinary is used to store uploaded:

- Profile Pictures
- Resume PDFs

---

## 3. Signup Profile Picture

Integrated Cloudinary with Signup.

When a user uploads a profile picture:

User → Backend → Cloudinary → Image URL → Database

---

## 4. Update Profile Resume

Added resume upload functionality in Update Profile.

The uploaded resume PDF is stored in Cloudinary and its URL is saved with the user's profile.

---

# 💡 Key Concepts Learned

### Cloudinary

Cloudinary is a cloud-based media management service used to store and manage images and files.

### Data URI Parser

Used to convert uploaded file data into a format that can be processed and uploaded to Cloudinary.

### Cloud Storage

Instead of storing large files directly inside MongoDB, files are stored in Cloudinary and their URLs are saved in the database.

---

# 🔄 Flow

User Uploads File
      ↓
Backend Receives File
      ↓
Data URI Parser
      ↓
Cloudinary Upload
      ↓
Cloudinary Returns URL
      ↓
URL Saved in MongoDB

---

# 🎤 Interview Questions

### 1. Why did you use Cloudinary?

To store profile images and resumes in cloud storage instead of storing the actual files in MongoDB.

### 2. Why don't you store images directly in MongoDB?

Storing large files directly in the database can increase database size and reduce efficiency. We store the file in Cloudinary and save only its URL in MongoDB.

### 3. What is Data URI Parser used for?

It converts uploaded file data into a format that can be processed and uploaded to Cloudinary.

### 4. What files did you upload to Cloudinary?

Profile pictures and resume PDFs.

### 5. What is stored in MongoDB after uploading a file?

The Cloudinary URL of the uploaded file is stored in MongoDB.

---

# ⚡ Quick Revision

✅ Data URI Parser

✅ Cloudinary Setup

✅ Profile Picture Upload

✅ Resume PDF Upload

✅ Cloud Storage

✅ Cloudinary URL saved in MongoDB