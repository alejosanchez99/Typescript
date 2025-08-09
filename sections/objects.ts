// const printName = (person: { first: string; last: string }): void => {
//   console.log(`${person.first} ${person.last}`);
// };

// printName({ first: "Thomas", last: "Jenkins" });

// const coordinate: { x: number; y: number } = {
//   x: 34,
//   y: 23,
// };

// const randomCoordinate = (): { x: number; y: number } => {
//   return { x: Math.random(), y: Math.random() };
// };

// printName({ first: "Mick", last: "Jagger", age: 47 });

// const singer = { first: "Mick", last: "Jagger", age: 47, isAlive: true };
// printName(singer);

type Point = {
  x: number;
  y: number;
};

const coordinate: Point = {
  x: 34,
  y: 23,
};

const randomCoordinate = (): Point => {
  return { x: Math.random(), y: Math.random() };
};

const doublePoint = (point: Point): Point => {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
};

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

const calculatePayout = (song: Song): number => {
  return song.numStreams * 0.00033;
};

const printSong = (song: Song): void => {
  console.log(`${song.title} - ${song.artist}`);
};

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 232323,
  credits: {
    producer: "Phill Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type Point2 = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point2 = { x: 1, y: 3 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 2323,
  username: "Catgirl",
};

// user.id = 3434;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
