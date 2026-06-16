import e from "express";

const app = e();

app.use(e.json());

app.get("/", (req, res) => {
  res.send("Hello doc");
});

export default app;
