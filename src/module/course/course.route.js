import e from "express";

const route = e.Router();

route.get("/");
route.get("/:id");
route.post("/");
route.put("/:id");

export default route;
