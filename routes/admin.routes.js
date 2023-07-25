import {adminCreate,
    adminUpdate,
    adminFindOne,
    adminFindAll,
    adminDelete,
    adminDeleteAll} from "../controller/admin.controller.js";
import express from "express";

const adminRoute = express.Router();

// Create new admin
adminRoute.post("/admin/create", adminCreate);

// Retrieve all admin from database
adminRoute.get("/admin", adminFindAll);

// Retrieve single admin by email
adminRoute.get("/admin/:email", adminFindOne);

// Updating admin by email from request
adminRoute.put("/admin/:email", adminUpdate);

// Delete a single admin by email from request
adminRoute.delete("/admin/delete/:email", adminDelete);

// Delete all admin inside the database
adminRoute.delete("/admin/delete", adminDeleteAll);

export default adminRoute;