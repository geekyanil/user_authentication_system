PROJECT DOCUMENTATION
Project Name: User Authentication System
Technology Used: Major tech Nodejs, Reactjs, mongodb, Expressjs ,Sass
Backend Part: The major files are:
1) Server.js → This is the main file of this backend where the app is initialized.
2) Router folder:
i) Auth-router.js → This is the router for the basic CRUD operation is initialized.
ii) Admin-router.js → This is the router for the Admin which handle all the operations of all the user like delete, update and can see all the users facility is initialized.
3) Models folder: The model for the user is initialized .
4) Controller folder:
i) Auth-controller.js → All the functionality of user like signup, login, user profile, update profile and delete profile are initialized and created.
ii) Admin-controller.js → All the functionality of Admin is initialized and created which handles all the users.
5) Utils : In this folder, database connection is established.
6) Middleware: All the authentication are done in this folder having auth-middleware, admin-middleware, error-middleware.
7) Validators: This is for the validation of the user. Here, I used zod validation package.
API EndPoints:
1) For The user:
i) POST → /api/auth/signup →Register a new user.
ii) POST→ /api/auth/login → Authenticate a user and return a JWT.
iii) GET→ /api/auth/profile →Retrieve the authenticated user's profile information.
iv) PUT→ /api/auth/profile/:id → Update the authenticated user's profile information.
v) DELETE→ /api/auth/profile/delete/:id → Delete the authenticated user's account.
NOTE: By default all the users are simply USER not ADMIN.
2) For The Admin
i) GET → /api/admin/users → Get All The Users.
ii) GET → /api/admin/users/:id → Get Single User.
iii) PATCH → /api/admin/users/update/:id → Update the Users details.
iv) DELETE → /api/admin/users/delete/:id → Delete the users.
NOTE: ADMIN has the access to see all the users, update all the users and delete all the users.
Frontend Part: The major files are:
1) index.js → This is the starting file or main file where app is initialized.
2) App.js → This is the file where all the routing has done.
3) Components → All the components files has been created like in this project Navbar, Footer, Profiles and Layouts.
4) Pages → All the pages are created like in this projects Home.jsx, Signup.jsx, Login.jsx, Logout.jsx.
5) Store → In this project, auth.jsx file where useContext() is used for the data passing.
6) index.scss → All the css styling has done.
Project Running Locally:
1) Change the Mongod_URI to mongodb://localhost:27017/user_authentication_system
2) For backend: There is server a file. To run it, Use command: npm start
3) For frontend: There is client file. To run , use command : npm start
Github repo:
https://github.com/geekyanil/user_authentication_system/
Live Host:
https://user-authentication-system-frontend.vercel.app/
