import express from "express";
import { createurl, deleteurl, getallurl, geturl } from "../controller/shorturl";

const router = express.Router();

router.post("/shorturl",createurl);
router.get("/shorturl", getallurl);
router.get("/shorturl/:id",geturl);
router.delete("/shorturl/:id", deleteurl);

export default router;