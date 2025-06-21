"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteurl = exports.geturl = exports.getallurl = exports.createurl = void 0;
const shorturl_1 = require("../model/shorturl");
//create 
const createurl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("The fullurl is ", req.body.fullurl);
        const { fullurl } = req.body;
        const urlfound = yield shorturl_1.urlmodel.find({ fullurl });
        if (urlfound.length > 0) {
            res.status(409);
            res.send(urlfound);
        }
        else {
            const shorturl = yield shorturl_1.urlmodel.create({ fullurl });
            res.status(201).send(shorturl);
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong!" });
    }
});
exports.createurl = createurl;
//getall
const getallurl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shorturl = yield shorturl_1.urlmodel.find();
        if (shorturl.length < 0) {
            res.status(400).send({ messange: "short url not found!" });
        }
        else {
            res.status(200).send(shorturl);
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong!" });
    }
});
exports.getallurl = getallurl;
//get
const geturl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shorturl = yield shorturl_1.urlmodel.findOne({ shorturl: req.params.id });
        if (!shorturl) {
            res.status(404).send({ message: "full url not found" });
        }
        else {
            shorturl.clicks++;
            shorturl.save();
            res.redirect('${shorturl.fullurl}');
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong!" });
    }
    const shorturl = yield shorturl_1.urlmodel.findOne({ shorturl: req.params.id });
    if (!shorturl) {
        res.status(404).send({ message: "full url not found" });
    }
    else {
        shorturl.clicks++;
        shorturl.save();
        res.redirect('${shorturl.fullurl}');
    }
});
exports.geturl = geturl;
//delete
const deleteurl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shorturl = yield shorturl_1.urlmodel.findByIdAndDelete({ _id: req.params.id });
        if (shorturl) {
            res.status(200).send({ message: "url successfully deleted" });
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong!" });
    }
});
exports.deleteurl = deleteurl;
