"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlmodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
const shorturlschema = new mongoose_1.default.Schema({
    fullurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true,
        default: () => (0, nanoid_1.nanoid)().substring(0, 10),
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
});
exports.urlmodel = mongoose_1.default.model("shorturl", shorturlschema);
