import express from "express";
import {
  registerFaculty,
  loginFaculty,
  getFaculty,
} from "../controllers/faculty.controller.js";

const router = express.Router();

router.post("/register", registerFaculty);
router.post("/login", loginFaculty);
router.get("/:id", getFaculty);

export default router;
