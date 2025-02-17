//step-1
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userroute.js"; // Corrected path
import cors from "cors";

databaseConnection();

dotenv.config({
    path: ".env"
});

const app = express();

// Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));

// API
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});



// import express from "express";
// import dotenv from "dotenv";
// import database from "./utils/database.js";  // Ensure the path is correct
// import cookieParser from "cookie-parser";
// import userRoute from './routes/userroute.js';          //**changes made in name use small case userroute.js**
// import databaseConnection from "./utils/database.js";
// import cors from "cors";



// dotenv.config({ path: ".env" }); 

// const app = express(); 
// const PORT = process.env.PORT || 8080;
// databaseConnection();  // Assuming `database.js` exports a function
 
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//     origin:'http://localhost:3000',
//     Credentials:true,
// }

// app.use(cors(corsOptions));  // Enable CORS for all routes




// //api
// app.use("/api/v1/user",userRoute);                          //created api
// //http://localhost:8080/api/v1/user/register                                   
// //to test api we can use postman or thunderbolt in vs extension                          //1:51:38  and 1:54:03

// //****Now go on mongo DB then to your project and go to network access select current network access and select option allow from everywhere****


// //go to thunderbolt extension
// //in new type http://localhost:8080/api/v1/user/register
// //the in body in json 
// // {
// //     "fullName":"Pankaj Ahirrao",
// //     "email":"pdahirrao25@gmail.com",
// //     "password":"123"
// //   }
// //select POST method and the send
// //we can se output in the mongodb->cluster->browse collection->test->go in user


// // Use the userRoute for routes starting with "/user"
// //app.use('/user', userRoute);

// // Call the database function


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
