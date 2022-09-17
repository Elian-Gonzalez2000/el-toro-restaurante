const routes = require("express").Router();
import auth from "./admin/auth";
import product from "./admin/product";

routes.use("/api", auth);
routes.use("/api", product);

routes.use((_req: any, res: any) => res.status(404).json("Not found"));
export { routes };
