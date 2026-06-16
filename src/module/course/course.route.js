import e from "express";

const router = e.Router();

import {
  getAllCourceController,
  createCourceController,
  getCourceIdController,
  updateCourceController,
  deleteCourceControler,
} from "./course.controller.js";

import authMiddleware from "../../middleware/auth.middleware.js";

router.get("/", getAllCourceController);
router.get("/:id", getCourceIdController);
router.post("/", authMiddleware, createCourceController);
router.put("/:id", authMiddleware, updateCourceController);
router.delete("/:id", authMiddleware, deleteCourceControler);

export default router;
