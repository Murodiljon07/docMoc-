import Message from "../../models/message.nodel.js";

export const sendMessageController = async (req, res) => {
  const body = req.body;

  const message = await Message.create(body);

  res.json({ msg: "Succes, message sended", message });
};

export const getMessagesController = async (req, res) => {
  const messages = await Message.find();

  res.json({ msg: "Success", messages });
};

export const deleteMessageController = async (req, res) => {
  const { id } = req.params;

  await Message.findByIdAndDelete(id);

  res.json({ msg: "Succes, mesage deleted" });
};
