"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shorturl_1 = require("../controller/shorturl");
const router = express_1.default.Router();
router.post("/shorturl", shorturl_1.createurl);
router.get("/shorturl", shorturl_1.getallurl);
router.get("/shorturl/:id", shorturl_1.geturl);
router.delete("/shorturl/:id", shorturl_1.deleteurl);
exports.default = router;
