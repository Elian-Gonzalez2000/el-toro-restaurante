const routes = require("express").Router();
import auth from "./admin/auth";
import product from "./admin/product";
import initialData from "./admin/initialData";

routes.use("/api", auth);
routes.use("/api", product);
routes.use("/api", initialData);

routes.use((_req: any, res: any) => res.status(404).json("Not found"));
export { routes };
