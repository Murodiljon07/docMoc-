import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: { type: String, required: true },
  tagColor: { type: String, required: true },
  rating: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  lessons: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: false },
  img: { type: String, required: true },
});

const Course = mongoose.model("couse", courseSchema);

export default Course;
