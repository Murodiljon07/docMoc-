import User from "../../models/user.model.js";

export const loginService = async (email, password) => {
  const user = await User.findOne({ email, password });

  return user;
};

export const registerService = async () => {};
