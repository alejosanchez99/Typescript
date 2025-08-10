"use strict";
const nums = [];
const colors = [];
const input = document.querySelector("#username");
input.value = "test";
const btn = document.querySelector(".btn");
const identity = (item) => {
    return item;
};
identity(7);
identity("hello");
identity({ name: "Kitty", breed: "any" });
const getRandomElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([4, 232, 2321, 12325, 645]));
getRandomElement(["a", "v", "asd"]);
const merge = (object1, object2) => {
    return Object.assign(Object.assign({}, object1), object2);
};
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(comboObj);
/* Type constraints */
const printDoubleLength = (thing) => {
    return thing.length * 2;
};
const printDoubleLength2 = (thing) => {
    return thing.length * 2;
};
/* Default type parameters */
const makeEmptyList = () => {
    return [];
};
const string = makeEmptyList();
class Playlist {
    constructor(queue = []) {
        this.queue = queue;
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
