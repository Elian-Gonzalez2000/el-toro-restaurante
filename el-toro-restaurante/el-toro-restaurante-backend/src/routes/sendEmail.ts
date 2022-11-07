const router = require("express").Router();
import { sendEmail } from "../controller/sendEmail";

router.post("/send-email", sendEmail);

export default router;
