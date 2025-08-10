"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.sample([45, 25, 645, 45]);
const url = "https://jsonplaceholder.typicode.com/users";
axios_1.default
    .get(`${url}/1`)
    .then((res) => printUser(res.data))
    .catch((e) => console.log("Error", e));
axios_1.default
    .get(url)
    .then((res) => res.data.forEach(printUser))
    .catch((e) => console.log("Error", e));
const printUser = (user) => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
};
