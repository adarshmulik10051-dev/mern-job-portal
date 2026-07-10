01_Backend_Setup
🎥 Timestamp: 18:42 - 36:10

🎯 Goal of Today:
set up bakend  project ,install all requied pakages ,coonect the apllication with mongoDB
with run backend server succesfully

🛠️what  i did today :
 1. create  project folder :jobportal/
     inside jobportal  two folder
            JobPortal/ 
            │ 
            ├── frontend/ react application (ui)
            └── backend/ APIS &business Logic ,database 
 2. enter in backed folder usinf 
        cd .\backend\
 3. then install important pakages 
 npm i express mongoose nodemon jsonwebtoken bcryptjs cookie-parser dotenv cors  

      express  : create backend server & REST APIs
      Mongoose : coonect Node.js with MongoDB
      Nodemon  : atumatically restast server when some changes 
      jwt      :authentication and authorization
      bcrypt   :encrypt user pass  for sotring
      dotenv   :Load enviromental variable for .env
      cors     :communication bet react frontend & backend 

 4. create idex.js : 
    create the main entry point of the backend 
     why:
     - load env
     - connect mongoDb
     - start the server 
     - create express application
     - configrue middleware
5. create .env  :
 it helps to hide sensative data like urls & secret keys 
6. connected MongoDB Atlas:
  - create database cluster
  - create databse user 
  - add 0.0.0./0 IP for allow from any loaction 
  - copy URIString 
  - add in env

  7. create seaprate file for  handel database connections.
        databse/
        └── utils/ 
           │ └── db.js
  8. 🎤 Interview Questions
   - Why do we separate frontend and backend?:
   - Why do we use Express?(Express is a Node.js framework used to create backend servers, APIs, routes, and middleware quickly with minimal code.)
   - Why is index.js called the entry point?
   - What is the purpose of .env?
   - Why do we use Mongoose instead of the MongoDB driver directly?
   - Why is CORS required?
   - Why is db.js kept separate?
   9.⚡ Quick Revision:
   - Backend setup completed successfully.
   - Installed all required backend packages.
   - Configured Express server.
   - Added middleware.
   - Connected MongoDB Atlas.
   - Stored secrets in .env.
   - Created a separate db.js for database connection.
   - Backend server started successfully         

          


