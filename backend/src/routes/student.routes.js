// routes/studentRoutes.js
import express from "express";
import { loginStudent, registerStudent } from "../controllers/student.controller.js";

const router = express.Router();

// Register a new student
router.post("/register", registerStudent);

// Login for verified students
router.post("/login", loginStudent);

export default router; // Corrected export
