import e from "express";

const router = e.Router();

import {
  getAllTeachersController,
  getTeacherIdController,
  createTeacherController,
  deleteTeacherController,
  updateTeacherController,
} from "./teacher.controller.js";

import authMiddleware from "../../middleware/auth.middleware.js";

router.get("/", getAllTeachersController);
router.get("/:id", getTeacherIdController);
router.post("/", authMiddleware, createTeacherController);
router.delete("/:id", authMiddleware, deleteTeacherController);
router.put("/:id", authMiddleware, updateTeacherController);

export default router;
