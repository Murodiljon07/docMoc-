import { generateJWT } from "../../util/jwt.js";
import { loginService, registerService } from "./auth.service.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService(email, password);

  if (!user) {
    res.json({ msg: "user not found" });
  }

  res.json({ msg: "Welcom to your profil", user: user });
};

export const registerController = async (req, rs) => {};
