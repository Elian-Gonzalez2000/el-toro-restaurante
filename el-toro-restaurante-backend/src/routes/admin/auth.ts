const router = require("express").Router();

const {
   signin,
   signup,
   getAllUsers,
   getUserByEmail,
   deleteUserByEmail,
   editUserByEmail,
} = require("../../controller/admin/auth");

router.get("/admin/getallusers", getAllUsers);
router.get("/admin/user/:useremail", getUserByEmail);
router.post("/admin/signin", signin);
router.post("/admin/signup", signup);
router.put("/admin/user/:useremail", editUserByEmail);
router.delete("/admin/user/:useremail", deleteUserByEmail);

export default router;
