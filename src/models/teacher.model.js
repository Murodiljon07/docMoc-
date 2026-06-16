import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  category: { type: String, required: true },
  bio: { type: String, required: true },
  stats: { type: [String], required: true },
  img: { type: String, required: true },
});

const Teacher = mongoose.model("teacher", teacherSchema);

export default Teacher;
