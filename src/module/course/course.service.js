import Course from "../../models/cources.model";

export const getAllCourseService = async () => {
  const courses = await Course.find();

  return courses;
};
