import e from "express";

const router = e.Router();

import {
  getAllCourceController,
  createCourceController,
} from "./course.controller.js";

router.get("/", getAllCourceController);
// router.get("/:id");
router.post("/", createCourceController);
// router.put("/:id");x

export default router;
