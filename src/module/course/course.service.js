import Course from "../../models/cources.model.js";

export const getAllCourseService = async () => {
  const courses = await Course.find();

  return courses;
};

export const newCourceService = async (body) => {
  const newCource = await Course.create(body);

  return newCource;
};
