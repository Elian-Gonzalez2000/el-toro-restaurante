const router = require("express").Router();

const { initialData } = require("../../controller/admin/initialData");

router.get("/admin/initialdata", initialData);

export default router;
