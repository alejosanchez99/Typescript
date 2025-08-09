let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver: boolean = true;
gameOver = true;
// gameOver = "True";

// type inference

let tvShow = "Olive Kitteridge";

tvShow = "The other two";
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = "asd";

// The any type
let thing: any = "Hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["Arrival", "The thing", "Aliens", "Aliens", "Amadeus"];
let foundMove: string;

foundMove = movies.find((movie) => movie === "Amadeus")!;
