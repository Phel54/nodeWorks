// Import all dependencies and middleware here
import express from "express";;
import bodyParser from "body-parser"
import {
    userController,
} from "./controller";
import mongoose from "mongoose";



//Init an Express app
const app = express();

//Using my dependencies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using all my controllers(APIs) here
app.use("/", userController);

//Starting my server here
app.listen(8080, (req, res)=>{
    console.log("Server is running on port 8080");
    mongoose.connect("mongodb://localhost:27017/userdb", {useUnifiedTopology: true});
    console.log("Connected to mongoDB at port 27017");
    
});