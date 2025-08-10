const nums: Array<number> = [];
const colors: Array<string> = [];

const input = document.querySelector<HTMLInputElement>("#username")!;
input.value = "test";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

interface Cat {
  name: string;
  breed: string;
}

const identity = <Type>(item: Type): Type => {
  return item;
};

identity<number>(7);
identity<string>("hello");
identity<Cat>({ name: "Kitty", breed: "any" });

const getRandomElement = <T>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([4, 232, 2321, 12325, 645]));

getRandomElement(["a", "v", "asd"]);

const merge = <T extends object, U extends Object>(object1: T, object2: U) => {
  return {
    ...object1,
    ...object2,
  };
};

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(comboObj);

interface Lengthy {
  length: number;
}

/* Type constraints */
const printDoubleLength = <T extends Lengthy>(thing: T): number => {
  return thing.length * 2;
};

const printDoubleLength2 = (thing: Lengthy): number => {
  return thing.length * 2;
};

/* Default type parameters */
const makeEmptyList = <T = string>(): T[] => {
  return [];
};

const string = makeEmptyList();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  constructor(public queue: T[] = []) {}
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
