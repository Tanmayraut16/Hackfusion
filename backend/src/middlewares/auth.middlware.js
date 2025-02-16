import jwt from "jsonwebtoken";
import Student from "../models/students.model.js";
import Faculty from "../models/faculty.model.js";

// Middleware to verify Student authentication
export const verifyStudent = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ message: "Access Denied. No token provided." });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const student = await Student.findById(decoded.id);

    if (!student)
      return res
        .status(403)
        .json({ message: "Access Denied. Invalid student credentials." });

    req.user = student; // Attach student data to request
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token." });
  }
};

// Middleware to verify Faculty authentication
export const verifyFaculty = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ message: "Access Denied. No token provided." });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const faculty = await Faculty.findById(decoded.id);

    if (!faculty)
      return res
        .status(403)
        .json({ message: "Access Denied. Invalid faculty credentials." });

    req.user = faculty; // Attach faculty data to request
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token." });
  }
};
