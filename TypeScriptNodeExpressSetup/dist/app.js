"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************************
tsconfig setup
Uses es6 as target
output files (js) are in ./dist folder
input compile files (ts) are in ./src folder
enable module resolution to be node
**************************************************/
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const add = (a, b) => a + b;
app.get("/", (req, res, next) => {
    console.log(add(5, 5));
    res.send("hello");
});
app.listen(5000, () => console.log("Server running"));
