const router = require("express").Router();

const { createProduct } = require("../../controller/admin/products");

router.post("/admin/product/create", createProduct);

export default router;
