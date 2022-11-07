const routes = require("express").Router();
import auth from "./admin/auth";
import product from "./product";
import initialData from "./admin/initialData";
import shopping from "./admin/shopping";
import sendEmail from "./sendEmail";

routes.use("/api", auth);
routes.use("/api", product);
routes.use("/api", initialData);
routes.use("/api", shopping);
routes.use("/api", sendEmail);

routes.use((_req: any, res: any) => res.status(404).json("Not found"));
export { routes };
