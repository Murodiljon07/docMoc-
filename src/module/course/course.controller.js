import { getAllCourseService, newCourceService } from "./course.service.js";

export const getAllCourceController = async (req, res) => {
  const cources = await getAllCourseService();

  res.json({ msg: "Success", cources });
};

export const createCourceController = async (req, res) => {
  const body = req.body;

  const newCource = await newCourceService(body);

  res.json({ msg: "Course created", course: newCource });
};
