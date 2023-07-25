import {
  userFindAll,
  userCreate,
  userFindOne,
  userUpdate,
  userDelete,
  userDeleteAll,
  userSignIn
} from "../controller/user.controller.js";
import express from "express";
import upload from "../middleware/upload.js";
// import multer from "multer";

const userRoute = express.Router();

// Create a new User
userRoute.post("/user/create", upload.fields([{name: 'foto'}, {name: 'fotoKtp'}]) ,userCreate);

// User Sign In
userRoute.post("/user/signIn",userSignIn);
  
// Retrieve all User
userRoute.get("/user", userFindAll);
  
// Retrieve a single user with email
userRoute.get("/user/find/:email", userFindOne);
  
// Update a User with id
userRoute.put("/user/:email", userUpdate);
  
// Delete a User with id
userRoute.delete("/user/delete/:email", userDelete);
  
// Delete all User
userRoute.delete("/user/delete", userDeleteAll);

  export default userRoute;