import {
  getAllCourseService,
  newCourceService,
  getCourceIdService,
  updateCourceService,
  deleteCourceService,
} from "./course.service.js";

export const getAllCourceController = async (req, res) => {
  const cources = await getAllCourseService();

  res.json({ msg: "Success", cources });
};

export const getCourceIdController = async (req, res) => {
  const { id } = req.params;
  const cource = await getCourceIdService(id);

  res.json({ msg: "Succes get cource", cource });
};

export const createCourceController = async (req, res) => {
  const body = req.body;

  const newCource = await newCourceService(body);

  res.json({ msg: "Course created", course: newCource });
};

export const updateCourceController = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const course = await updateCourceService(id, body);

  if (!course) {
    return res.status(404).json({
      msg: "Course not found",
    });
  }

  res.json({
    msg: "Course updated",
    data: course,
  });
};

export const deleteCourceControler = async (req, res) => {
  const { id } = req.params;

  const data = await deleteCourceService(id);

  res.json({ msg: "Success, cource deleted" });
};
