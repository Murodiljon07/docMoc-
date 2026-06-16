import e from "express";

const app = e();

app.use(e.json());

import authRouter from "./module/auth/auth.route.js";
import courcesRouter from "./module/course/course.route.js";
import teacherRouter from "./module/teacher/teacher.route.js";
import messgaeRouter from "./module/contact/contact.route.js";

app.get("/", (req, res) => {
  res.send("Hello doc");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/cource", courcesRouter);
app.use("/api/v1/teacher", teacherRouter);
app.use("/api/v1/message", messgaeRouter);

export default app;
