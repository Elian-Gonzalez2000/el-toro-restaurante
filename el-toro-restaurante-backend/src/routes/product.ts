const router = require("express").Router();

const {
   createProduct,
   getAllProducts,
} = require("../../controller/admin/products");

const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
   destination: function (req: any, file: any, cb: any) {
      cb(null, path.join(path.dirname(__dirname), "../uploads"));
   },
   filename: function (req: any, file: any, cb: any) {
      cb(null, `${shortid.generate()}-${file.originalname}`);
   },
});
//console.log(path.dirname(__dirname));
const upload = multer({ storage });

router.get("admin/products", getAllProducts);
router.post(
   "/admin/product/create",
   upload.array("productPicture", 7),
   createProduct
);

export default router;
