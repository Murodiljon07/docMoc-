import e from "express";

const router = e.Router();

import {
  deleteMessageController,
  getMessagesController,
  sendMessageController,
} from "./contact.controller.js";

router.post("/send-message", sendMessageController);
router.post("/", getMessagesController);
router.post("/:id", deleteMessageController);

export default router;
