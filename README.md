Detail Explanation of API and there payloads
<!-- Registration, Login, Authentication and Authorization or User Management -->
->User Registration
endpoint: http://localhost:5000/api/register
Method:POST
payload: {
  "name":"username",
  "email":"usergmail@gmail.com",
  "password":"password123",
}

-> Admin Registration
endpoint:http://localhost:5000/api/register
Method:POST
payload:{
  "name":"admin",
  "email":"admin@gmail.com",
  "password":"admin123",
  "isAdmin":true
}

-> login : user and admin
endpoint: https://yummyfood.onrender.com/api/login-user
Method:POST
payload:{
  "email":"usergmail@gmail.com",
  "password":"password123"
}
Authentication is done by compare hash password

<!-- Admin Books CRUD Operation or Book Management:-->
->Adding Book
Endpoint: http://localhost:5000/api/add-book
Auth Token:Yes
Method:POST
Payload:{
  "bookTitle":"Harry Potter",
  "author":"J.K. Rowling",
   "ISBN":"1408855666",
  "publicationDate":"29-05-2024",
  "copies":10,
  "genre":"fantasy literature"
}
Authorization done with help of JWT token and signed role of admin 
to perform CRUD Operation.

->Update Books
Endpoint: http://localhost:5000/api/update-book
Auth Token:Yes
Method: PUT
Payload:{
  "bookId": "bookID",
  "bookData": {
    "bookTitle": "Updated Book Name",
    "author": "Updated Author Name",
    "ISBN":"9788172234984",
    "genre":"comedy",
    "copies":"12"
  }
}

->Delete Book
Endpoint: http://localhost:5000/api/delete-book
Auth Token:Yes
Method: DELETE
Payload:{
  "bookId":"bookID"
}

->Fetch All Books
Endpoint: http://localhost:5000//get-book
Auth Token:Yes
Method: GET
payload:No

<!-- Borrowing System -->
->Borrow Books
Endpoint:http://localhost:5000/api/borrow-book
Method:POST
Payload:{
  "userId":"userID",
  "bookId":"bookID"
}

->Return Book
Endpoint:http://localhost:5000/api/return-book
Method:POST
payload:{
  "userId":"UserID",
  "bookId":"bookID",
  "borrowId":"transactionID"
}

->Borrow History
Endpoint:http://localhost:5000/api/borrow-history
Method:GET
payload:{
  "userId":"UserID"
}

->Book Availability
Endpoint:http://localhost:5000/api/book-availability
Method:GET
payload:No

<!-- How to setup project -->
step 1: Download zip file of the project from GITHUB
step 2: Exract in the folder which will be used in VScode
step 3: Once Check package.json for run command

step 4: create .env files with fields 
PORT = 5000
NODE_MODE=Development
MONGO_URI= your-Mongo-Uri
JWT_SECRET=your-secret-key
CLIENT_URL= your-url

step 5: create database in mongodb cluster named 'LibraryManagement'
or create your own named and change it as per your database name in db.js file variable  dbName:'your_database_name'

step 6: type in terminal->  npm run start , for nodemon-> npm run server

step 7: project will run, use thunderclient or postman for checking api

Thank you!