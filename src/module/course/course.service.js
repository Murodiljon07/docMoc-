import Course from "../../models/cources.model.js";

export const getAllCourseService = async () => {
  const cources = await Course.find();

  return cources;
};

export const newCourceService = async (body) => {
  const newCource = await Course.create(body);

  return newCource;
};

export const getCourceIdService = async (id) => {
  const cource = await Course.findById(id);

  return cource;
};

export const updateCourceService = async (id, body) => {
  const updateCource = await Course.findByIdAndUpdate(id, body);
  return updateCource;
};

export const deleteCourceService = async (id) => {
  return await Course.findByIdAndDelete(id);
};
