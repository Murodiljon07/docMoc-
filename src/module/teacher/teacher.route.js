import e from "express";

const router = e.Router();

import {
  getAllTeachersController,
  getTeacherIdController,
  createTeacherController,
} from "./teacher.controller.js";

router.get("/", getAllTeachersController);
router.get("/:id", getTeacherIdController);
router.post("/", createTeacherController);

export default router;
