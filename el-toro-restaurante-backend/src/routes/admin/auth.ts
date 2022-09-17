const router = require("express").Router();

const { signin, signup, getAllUsers } = require("../../controller/admin/auth");

router.get("/admin/getallusers", getAllUsers);
router.post("/admin/signin", signin);
router.post("/admin/signup", signup);

export default router;
