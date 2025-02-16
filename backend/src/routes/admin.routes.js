import express from "express";
import { loginAdmin, getAdmin } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/login", loginAdmin); // Only login route
router.get("/", getAdmin); // Get admin details

export default router;
