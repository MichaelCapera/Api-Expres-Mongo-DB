"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app")); // importamos app
app_1.default.listen(4000, () => {
    console.log('server on port', 4000); //Ejecutar app Puerto 4000
});
