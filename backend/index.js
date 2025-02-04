//npm init
//give package name
//package.json file will be created

//npm i express mongoose (it is framework of nodejs.It is more efficient than nodejs)
//package-lock.json file will be created

//Backend Steps
//1. Create a server

//add this code in package.json file
//"description": "",
// "type": "module"
//this is done because we want to import express in our file or we can use require as below
//const express = require("express");

import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./backend/utils/database";

databaseConnection();

dotenv.config({                    //config is a function of dotenv
    path:".env"
});             


const app = express();             //app because we can use all functions of express in app
const PORT = 8080;                 //port number

  

app.listen(process.env.PORT, () => {                                         //listen is a function of express                                                             //it has parameters port and callback function
    console.log(`Server is running on port ${process.env.PORT}`);           //`` is used for string interpolation in javascript
});                                                               // callback function is used to check whether server is running or not                   


//node index.js to run the server in terminal we have to do it every time
//for that we can use nodemon it will automatically run the server when we save the file
//install nodemon
//npm i nodemon

//add this code in package.json file
//"scripts": {"dev": "nodemon index.js"}
//npm run dev

//npm i dotenv bcryptjs cookie-parser jsonwebtoken
//install npm i dotenv (it is used to hide the password and username of mongodb)
//install bcryptjs (it is used to hash the password)
//install cookie-parser (it is used to store the token in cookies)
//install jsonwebtoken (it is used to create token)

//import dotenv
//create a file .env
//write port
//write dotenv.config({path:".env"});

//create folders controllers,models,routes
//controllers folder is used to write the logic of the routes
//models folder is used to create the schema of the database
//routes folder is used to create the routes

//create a file user.js in models folder

