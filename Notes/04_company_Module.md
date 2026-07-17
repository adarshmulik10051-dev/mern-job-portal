# 04_Company_Module

🎥 Timestamp: 1:40:46 - 2:06:50

---

# 🎯 Goal of Today:
  BUild the company module ,creating APIS ,routes ANd test on postmon


  # 🛠️ What I Did Today

  1. # create company controller 
    controllers/
        └── company.controller.js
     - register company 
     - get all companies 
     - get company by id
     - update company information 

  2. # created company Routes 
    routes/
       └── company.route.js      
    connect all comapnyis  apis  to controller function 
    import all routes in idex.js using app.use()

  3. # API testing 
     all apis test on postmon
       -company register succesfully .bla bla 

  4. # company controler:
    - contain overall businesss logic on the company oprations 
  5. # CRUD Operations:-
            Performed basic CRUD operations:     
            - Create Company
            - Read Company
            - Update Company  
   6. # 🔄 Company Module Flow

                    Client
                        ↓
                    Company Route
                        ↓
                    Controller
                        ↓
                    MongoDB
                        ↓
                    Response Sent  
    7. ## 🎤 Interview Questions

                - Why do we need a Company module?
                - What APIs did you create in the Company module?
                - What is CRUD?
                - Why do we separate Controller and Routes?
                - How did you test Company APIs?   
    
    8. # ⚡ Quick Revision

            ✅ Company Controller Created

            ✅ Company Routes Connected

            ✅ Register Company API

            ✅ Get All Companies API

            ✅ Get Company By ID API

            ✅ Update Company API

            ✅ API Testing using Postman