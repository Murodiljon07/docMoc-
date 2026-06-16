import { generateJWT } from "../../util/jwt.js";
import { loginService, registerService } from "./auth.service.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService(email, password);

  if (!user) {
    res.json({ msg: "user not found" });
    return;
  }

  const token = await generateJWT(user._id, email);

  res.json({ msg: "Welcom to your profil", user: user, token: token });
};

export const registerController = async (req, res) => {
  const body = req.body;
  const newUser = await registerService(body);

  if (!newUser) {
    res.json({ msg: "Can't register user" });
  }

  const token = await generateJWT(newUser._id, newUser.email);

  res.json({ msg: "Welcome to our family", user: newUser, token: token });
};
