import e from "express";

const router = e.Router();

import {
  getAllTeachersController,
  getTeacherIdController,
  createTeacherController,
  deleteTeacherController,
  updateTeacherController,
} from "./teacher.controller.js";

router.get("/", getAllTeachersController);
router.get("/:id", getTeacherIdController);
router.post("/", createTeacherController);
router.delete("/:id", deleteTeacherController);
router.put("/:id", updateTeacherController);

export default router;
