import jwt from "jsonwebtoken";

export const generateJWT = async (id, email) => {
  const payload = { id, email };
  const token = await jwt.sign(payload, "secretme", { expiresIn: "1h" });
  return token;
};
