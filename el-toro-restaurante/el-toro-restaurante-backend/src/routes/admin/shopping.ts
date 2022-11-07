const router = require("express").Router();

import {
   createPurchase,
   deletePurchase,
   editPurchase,
   getAllPurchases,
   getPurchase,
} from "../../controller/admin/shopping";

router.get("/admin/purchases", getAllPurchases);
router.get("/admin/purchases/:id", getPurchase);
router.post("/admin/purchases", createPurchase);
router.put("/admin/purchases/:id", editPurchase);
router.delete("/admin/purchases/:id", deletePurchase);

export default router;
