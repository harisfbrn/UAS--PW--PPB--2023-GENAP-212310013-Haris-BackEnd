import { lapCreate,
    lapDelete,
    lapDeleteAll,
    lapFindAll,
    lapFindOne,
    lapUpdate} from "../controller/lap.controller.js";
import express from "express";

const lapRoute = express.Router();

// Create a new lapangan
lapRoute.post("/lap/create", lapCreate);
  
// Retrieve all lapangan
lapRoute.get("/lap", lapFindAll);
  
// // Retrieve a single lapangan with nama lapangan
lapRoute.get("/lap/:namaLapangan", lapFindOne);

// // Update a lapangan with nama lapangan
lapRoute.put("/lap/:namaLapangan", lapUpdate);
  
// //Delete a lapangan with nama lapangan
lapRoute.delete("/lap/delete/:namaLapangan", lapDelete);
  
// // Delete all lapangan
lapRoute.delete("/lap/delete", lapDeleteAll);

export default lapRoute;