const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("todoinput") as HTMLInputElement;

// (<HTMLInputElement>input).value;

btn.addEventListener("click", () => {
  console.log(input.value);
});

// let mystery: unknown = "Hello World!!";
// const numChars = (mystery as string).length;
