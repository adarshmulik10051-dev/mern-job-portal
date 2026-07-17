Here you go — short, clean answers for each question, interview-style.

## 🔹 1. Project Overview

**Q: Explain the architecture of your project.**
A: It's a MERN stack app — MongoDB for database, Express for backend APIs, React for frontend, Node.js as runtime. Frontend calls backend APIs, backend talks to MongoDB, and JWT handles authentication.

**Q: How many models do you have and how are they related?**
A: Four models — User, Company, Job, Application. A User (recruiter) creates a Company. A Company has many Jobs. A Job has many Applications. An Application links a User (student) to a Job.

**Q: What roles exist in your app?**
A: Two roles — Student and Recruiter. Student browses and applies to jobs. Recruiter creates companies, posts jobs, and manages applicants.

## 🔹 2. Authentication & Security

**Q: What is JWT and how did you use it?**
A: JWT (JSON Web Token) is a secure way to verify a user's identity without storing sessions on the server. After login, I generate a token with the user's ID, send it in an httpOnly cookie, and verify it on every protected route.

**Q: What is an httpOnly cookie? Why safer than localStorage?**
A: An httpOnly cookie can't be accessed by JavaScript in the browser, so it protects against XSS attacks. localStorage can be read by any script, making it less secure for tokens.

**Q: How are passwords stored?**
A: I hash passwords using bcrypt before saving to the database. During login, I use `bcrypt.compare()` to check the entered password against the hashed one. Plain passwords are never stored.

**Q: What does isAuthenticated middleware do?**
A: It reads the token from the cookie, verifies it using JWT, extracts the user ID, and attaches it to `req.id` so controllers know who's making the request. If the token is missing or invalid, it blocks the request.

**Q: What if the token expires?**
A: The request will fail verification, and the user gets an unauthorized error. They'd need to log in again to get a new token.

**Q: What is sameSite: "strict"?**
A: It stops the cookie from being sent in cross-site requests, protecting against CSRF attacks.

**Q: Session-based vs Token-based auth?**
A: Session-based stores login info on the server and gives the client a session ID. Token-based (JWT) stores all info in the token itself, so the server doesn't need to store sessions — it just verifies the token each time.

## 🔹 3. Database / Mongoose

**Q: MongoDB vs SQL?**
A: MongoDB stores data as flexible JSON-like documents (NoSQL), no fixed schema needed. SQL databases use tables with fixed rows/columns and strict relationships.

**Q: What does populate() do?**
A: It replaces a referenced ObjectId with the actual document data from another collection. I used it to show Company details inside Job, and Job+Company details inside Application.

**Q: How does ref and ObjectId work?**
A: `ObjectId` stores just the ID of a related document. `ref` tells Mongoose which model that ID belongs to, so `populate()` knows where to fetch the full data from.

**Q: Purpose of required and enum?**
A: `required: true` makes a field mandatory. `enum` restricts a field to a fixed set of values — like role can only be "student" or "recruiter".

**Q: How does nested populate work?**
A: You populate one field, and inside that, populate another related field. Example: in Application, I populate `job`, and inside job, I also populate `company`.

**Q: What is indexing?**
A: Indexing makes searching faster by creating a lookup structure on a field, instead of scanning the whole collection. I haven't added custom indexes yet, but MongoDB auto-indexes `_id`.

## 🔹 4. API Design / Express.js

**Q: What is REST API? Is yours RESTful?**
A: REST is an architecture style where each URL represents a resource, and HTTP methods (GET, POST, PUT, DELETE) define the action. Mine is mostly RESTful, except `applyJob` uses GET instead of POST.

**Q: When to use GET/POST/PUT/DELETE?**
A: GET to fetch data, POST to create data, PUT/PATCH to update data, DELETE to remove data. In my project, `applyJob` should ideally be POST since it modifies data, but I used GET — that's something I'd improve.

**Q: What is middleware?**
A: A function that runs between the request and the response, used for tasks like authentication, logging, or validation before reaching the controller.

**Q: req.body vs req.params vs req.query?**
A: `req.body` = data sent in the request body (like form/JSON data). `req.params` = values from the URL path (like `/job/:id`). `req.query` = values after `?` in the URL (like `?keyword=react`).

**Q: How do you handle errors?**
A: Currently I just log errors with `console.log(error)` in the catch block. This is a weak point — ideally I should send a proper error response like `res.status(500).json({message: "Server error"})`.

**Q: What is CORS?**
A: CORS (Cross-Origin Resource Sharing) controls which domains can call your API. I configured it to allow only my frontend URL (`localhost:5173`) with credentials enabled for cookies.

## 🔹 5. Logic-Specific

**Q: How did you prevent duplicate job applications?**
A: Before creating a new application, I check if one already exists with the same `job` and `applicant` ID. If found, I return an error.

**Q: How does a recruiter see only their own jobs?**
A: I filter jobs using `Job.find({created_by: adminId})`, where `adminId` comes from the logged-in user's token.

**Q: Company-Job relationship?**
A: One-to-many — one company can have many jobs, but each job belongs to one company.

**Q: Application relationship with Job and User?**
A: Each application links one job and one user (applicant) — it's a many-to-many relationship between User and Job, managed through the Application model.

## 🔹 6. Improvements / Weak Points

**Q: Do you have input validation for edge cases?**
A: Currently only basic "field missing" checks. I don't validate email format or negative salary — that's something to improve.

**Q: Is password ever exposed?**
A: Yes, I found that `getApplicants` API returns the full applicant object including the hashed password. I should fix this using `.select("-password")` in the populate/query.

**Q: How did you test your APIs?**
A: I used Postman to manually test all endpoints. I haven't written automated tests yet, but tools like Jest and Supertest can be used for that.

**Q: How would you make this scalable?**
A: Add pagination for job listings, add indexes on frequently searched fields, and add caching for repeated queries.

**Q: How will you handle file uploads?**
A: I'll use Multer to handle file uploads on the backend, and later Cloudinary to store files like resumes and profile photos in the cloud instead of the local server.

## 🔹 7. General MERN/Node.js

**Q: How does Node.js handle multiple requests being single-threaded?**
A: Node.js uses an Event Loop with non-blocking I/O. It delegates heavy tasks (like DB calls) to the background and handles other requests while waiting, instead of blocking the thread.

**Q: Explain async/await and Promises.**
A: A Promise represents a value that will be available in the future (success or failure). `async/await` is a cleaner way to write asynchronous code — `await` pauses execution until the Promise resolves, without needing `.then()` chains.

**Q: Why use environment variables (.env)?**
A: To keep sensitive data (DB URL, secret keys) out of the codebase, and to easily change configs between development and production without touching the code.

**Q: What is npm and package.json?**
A: npm is Node's package manager used to install libraries. `package.json` lists project details, dependencies, and scripts (like `npm run dev`) needed to run the project.

---

Practice saying these out loud in your own words — interviewers like natural explanation more than memorized lines. Want me to make short flashcard-style Q&A for quick revision before the interview?