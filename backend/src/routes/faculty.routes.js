import express from "express";
import {
  registerFaculty,
  loginFaculty,
  getFaculty,
} from "../controllers/faculty.controller.js";
// import { verifyFaculty } from "../middlewares/authMiddleware.js"; // Import Middleware

const router = express.Router();

router.post("/register", registerFaculty);
router.post("/login", loginFaculty);

// Protected Routes (Require Faculty Authentication)
// router.get("/profile", verifyFaculty, (req, res) => {
//   res.json({ faculty: req.user });
// });

export default router;
