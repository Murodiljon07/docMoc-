import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  Email: { type: String, requied: true },
  phone: { type: Number, required: true },
  messgaData: { type: String, required: true },
});

const Message = mongoose.model("message", messageSchema);

export default Message;
