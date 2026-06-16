import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: string, required: true },
  phone: { type: string, required: true },
  password: { type: string, required: true },
  firstName: { type: string, required: true },
  lastName: { type: string, required: true },
});

export default mongoose.model("user", userSchema);
