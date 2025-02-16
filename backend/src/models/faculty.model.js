// models/Student.js
import mongoose from mongoose;

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Ensure it's a valid email
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "faculty",
  },
}, {timestamps: true});

module.exports = mongoose.model("Faculty", facultySchema);