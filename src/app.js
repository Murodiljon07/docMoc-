import e from "express";

const app = e();

app.use(e.json());

import authRouter from "./module/auth/auth.route.js";

app.get("/", (req, res) => {
  res.send("Hello doc");
});

app.use("/api/v1/auth", authRouter);

export default app;
