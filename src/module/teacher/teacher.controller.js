import {
  getAllTeachersService,
  getTeachersIdService,
  createTeacherService,
  deleteTeacherService,
  updateTeacherService,
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

export const deleteTeacherController = async (req, res) => {
  const { id } = req.params;

  const data = await deleteTeacherService(id);

  res.json({ msg: "Teacher profil deleted" });
};

export const updateTeacherController = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updatedTacher = await updateTeacherService(id, body);

  res.json({ msg: "Success, profil updated", updatedTacher });
};
