
02_Database_Models.md
🎥 Timestamp: 36:10 - 54:19

🎯 Goal of Today:
  today we ceate database models for the project that understand how  data is orgnise in mapngoDB using mongoose 
🛠️ What I Did Today:
1. create models folder in backend then create seprate files for all models 
            backend/
                └── models/
                    ├── user.model.js // store all info for student/recuriter like name eamil pass profile 
                    ├── company.model.js// store company deatail 
                    ├── job.model.js--> stores all job each company manged by recuriter
                    └── application.model.js -->store evry job appliction->
2. new concept i learn :
  - Schema  : schema define structure of documnets ex user contain:name ,email ,pass, education
  - Model   : a model is created from Schema it perform CRUD opration
  - objectID: is used to connection bet difrent model ex--> company<-->job ,student <--->apllication
  - ref     : ref tells to monggose which colection and ObjectId belong ref-company 

3. 🎤 Interview Questions
   - What is a Schema?
   - What is a Model?
   - What is the difference between Schema and Model?
   - What is ObjectId?
   - Why do we use ref in Mongoose?
   - Why are models stored in a separate folder?
4. ⚡ Quick Revision

    ✅ Created models folder.

    ✅ Created 4 models:
           - User
           -Company
           -Job
           -Application

    ✅ Learned Schema.

    ✅ Learned Model.

    ✅ Learned ObjectId.

    ✅ Learned ref for creating relationships.   

