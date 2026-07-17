🔹 1. User APIs (/api/v1/user)

API                  | Method | कोण वापरतो              | काम काय
---------------------|--------|--------------------------|----------------------------------------------
/register             | POST   | Student + Recruiter दोघेही | नवीन account तयार करणे
/login                | POST   | Student + Recruiter दोघेही | Login करणे, JWT token cookie मध्ये मिळणे
/logout               | GET    | Student + Recruiter दोघेही | Logout करणे, cookie clear करणे
/profile/update       | POST   | Student + Recruiter दोघेही | स्वतःची profile update (bio, skills, resume)


🔹 2. Company APIs (/api/v1/company)

API              | Method | कोण वापरतो        | काम काय
-----------------|--------|--------------------|----------------------------------------------
/register         | POST   | फक्त Recruiter     | नवीन company/organization register करणे
/get              | GET    | फक्त Recruiter     | स्वतःने register केलेल्या सगळ्या companies बघणे
/get/:id          | GET    | फक्त Recruiter     | एका specific company चा तपशील बघणे (edit करण्याआधी)
/update/:id        | PUT    | फक्त Recruiter     | Company ची माहिती (logo, description, website) update करणे

Interview point: Student ला company create/manage करायची गरज नसते, त्यामुळे हे सगळे routes फक्त recruiter साठी असतात (frontend मध्ये role-based access control ठेवला जातो).


🔹 3. Job APIs (/api/v1/job)

API              | Method | कोण वापरतो                | काम काय
-----------------|--------|----------------------------|----------------------------------------------
/post             | POST   | फक्त Recruiter             | नवीन job posting तयार करणे
/get              | GET    | फक्त Student               | सगळ्या companies चे सगळे jobs बघणे (browse/search साठी, keyword filter सह)
/getadminjobs      | GET    | फक्त Recruiter             | स्वतः post केलेले jobs बघणे (manage करण्यासाठी)
/get/:id          | GET    | Student + Recruiter दोघेही | एका specific job चा तपशील (Job Description page साठी)

Interview point: /get (Student साठी) आणि /getadminjobs (Recruiter साठी) यात फरक — पहिला सगळे jobs दाखवतो, दुसरा फक्त "मी create केलेले" jobs दाखवतो (created_by फिल्टर वापरून).


🔹 4. Application APIs (/api/v1/application)

API                | Method | कोण वापरतो    | काम काय
-------------------|--------|----------------|----------------------------------------------
/apply/:id          | GET    | फक्त Student   | एका job साठी apply करणे
/get               | GET    | फक्त Student   | स्वतः apply केलेल्या सगळ्या jobs ची list बघणे
/:id/applicants     | GET    | फक्त Recruiter | एका job साठी कोणी apply केलंय ती candidates ची list बघणे
/status/:id/update  | POST   | फक्त Recruiter | Applicant चा status बदलणे (pending → accepted/rejected)

