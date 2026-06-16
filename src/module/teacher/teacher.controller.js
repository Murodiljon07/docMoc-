import {
  getAllTeachersService,
  getTeachersIdService,
  createTeacherService,
} from "./teacher.service.js";

export const getAllTeachersController = async (req, res) => {
  const teachers = await getAllTeachersService();

  res.json({ msg: "Success", teachers });
};

export const getTeacherIdController = async (req, res) => {
  const { id } = req.params;

  const teacher = await getAllTeachersService(id);

  res.json({ msg: "Success", teacher });
};

export const createTeacherController = async (req, res) => {
  const body = req.body;

  const newTeacher = await createTeacherService(body);

  res.json({ msg: "Teacher added", newTeacher });
};
