const router = require("express").Router();
const {
   createProduct,
   getAllProducts,
   getProductById,
   editProductById,
   deleteProduct,
} = require("../controller/products");

const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
   destination: function (req: any, file: any, cb: any) {
      cb(null, path.join(path.dirname(__dirname), "./uploads"));
   },
   filename: function (req: any, file: any, cb: any) {
      cb(null, `${shortid.generate()}-${file.originalname}`);
   },
});
//console.log(path.dirname(__dirname));
const upload = multer({ storage });
//console.log(path.dirname(__dirname));

router.get("/admin/products", getAllProducts);
router.get("/admin/product/:id", getProductById);
router.post(
   "/admin/product/create",
   upload.array("productPicture", 7),
   createProduct
);
router.put(
   "/admin/product/edit/:id",
   upload.array("productPicture", 7),
   editProductById
);
router.delete("/admin/product/:id", deleteProduct);

export default router;
