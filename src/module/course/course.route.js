import e from "express";

const router = e.Router();

import {
  getAllCourceController,
  createCourceController,
  getCourceIdController,
} from "./course.controller.js";

router.get("/", getAllCourceController);
router.get("/:id", getCourceIdController);
router.post("/", createCourceController);
// router.put("/:id");

export default router;
