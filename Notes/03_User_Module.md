03_User_Module
🎥 Timestamp: 54:19 - 1:28:05

🎯 Goal of Today:
  build a complete user authentication module  by creating user api's.authentication ,middleware,and user routes 

  🛠️ What I Did Today:
   1. create controller forder : used to store all buisenes logic 
      - create user.controller.js
      - create the API's
           . Register user
           . login user
           . logout user 
           . update profile 
       - create middlewares folder :
             middlewares/ 
                  └── isAuthenticated.js-->this middleware verify jwt token before allow acess to protect API'S
       - create  routes folder :
                routes/
                └── user.route.js coonect routs with controller function    
        -💡 Key Concepts Learned:
            1. Controller:
              contain buisness logic of the application
               ex- for user --> register, login.....

             2.Middleware:
              run before controller ,
              Its job is to verify whether the user is authenticated.
              If the token is valid → Continue.--If the token is invalid → Return Unauthorized 

             3.Routes:
             routes connect the client req to controller function 
             clent -->route--controler

             4.JWT Authentication:
               after sucessfully login
               - jwt token are genrated 
               -token is stored inside cookie
               -protected api's verified this token before exucuite

            🎤 Interview Questions
                - What is a Controller?
                -Why do we use Middleware?
                -What is JWT?
                -Why do we hash passwords?
                -Why is JWT stored in cookies?
                -What is the difference between Route and Controller?
                -Why is Update Profile a protected API? 
                Created User Controller.
            ⚡ Quick Revision
                Implemented Register, Login, Logout & Update Profile APIs.
                Created Authentication Middleware.
                Protected Update Profile API.
                Learned JWT Authentication.
                Learned Password Hashing using bcrypt.
                Connected Routes with Controllers.



