"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const shorturl_1 = __importDefault(require("./routes/shorturl"));
dotenv_1.default.config();
(0, dbConfig_1.default)();
const port = process.env.PORT || 5001; //backend port
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", //frontend port
    credentials: true,
}));
//routes
app.use("/api/", shorturl_1.default);
app.listen(5001, () => {
    console.log("server started at http://localhost:5001");
});
