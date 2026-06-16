import Teacher from "../../models/teacher.model.js";

export const getAllTeachersService = async () => {
  return await Teacher.find();
};

export const getTeachersIdService = async (id) => {
  return await Teacher.findById(id);
};

export const createTeacherService = async (body) => {
  return await Teacher.create(body);
};
