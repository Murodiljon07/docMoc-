import e from "express";

const router = e.Router();

import {
  getAllCourceController,
  createCourceController,
  getCourceIdController,
  updateCourceController,
} from "./course.controller.js";

router.get("/", getAllCourceController);
router.get("/:id", getCourceIdController);
router.post("/", createCourceController);
router.put("/:id", updateCourceController);

export default router;
