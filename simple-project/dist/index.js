"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
// (<HTMLInputElement>input).value;
btn.addEventListener("click", () => {
    console.log(input.value);
});
// let mystery: unknown = "Hello World!!";
// const numChars = (mystery as string).length;
