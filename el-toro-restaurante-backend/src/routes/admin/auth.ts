const router = require("express").Router();

const { signin, signup } = require("../../controller/admin/auth");

router.post("/admin/signin", signin);
router.post("/admin/signup", signup);

export default router;
