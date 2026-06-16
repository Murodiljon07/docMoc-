import e from "express";

const router = e.Router();

import {
  getAllCourceController,
  createCourceController,
  getCourceIdController,
  updateCourceController,
  deleteCourceControler,
} from "./course.controller.js";

router.get("/", getAllCourceController);
router.get("/:id", getCourceIdController);
router.post("/", createCourceController);
router.put("/:id", updateCourceController);
router.delete("/:id", deleteCourceControler);

export default router;
