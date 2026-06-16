import e from "express";

const router = e.Router();

import { loginController, registerController } from "./auth.controller.js";

router.post("/login", loginController);
router.post("/register", registerController);

export default router;
