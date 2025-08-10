/*Type of guard */

const triple = (value: number | string) => {
  if (typeof value === "string") {
    return value.repeat(3);
  }

  return value * 3;
};

/* Truthiness Guards */

const element = document.getElementById("idk");
if (element) {
  element;
} else {
  element;
}

const printLetters = (word: string | null) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    word;
    console.log("You did not pass in a word");
  }
};

/* Equality Narrowing */

const someDome = (x: string | number, y: string | boolean) => {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  }
};

someDome(3, "3");

/* In operator Narrowing */

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

const getRuntime = (media: Movie | TVShow) => {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }

  return media.duration;
};

getRuntime({ title: "Amadeus", duration: 140 });
getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 });

/* Instanceof narrowing */

const printFullDate = (date: string | Date) => {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
};

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

const printName = (entity: User | Company) => {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
};

/* Type predicate */

interface Cat {
  name: string;
  numLives: string;
}

interface Dog {
  name: string;
  breed: string;
}

const isCat = (animal: Cat | Dog): animal is Cat => {
  return (animal as Cat).numLives !== undefined;
};

const makeNoise = (animal: Cat | Dog): string => {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "Wow";
  }
};

/* Discriminated unions */

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Mooo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baa!";
    default:
      // we should never make it here, if we hadled all case correctly
      //   const shouldNeverGetHere: never = animal;
      //   return shouldNeverGetHere;
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
};

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 1,
  age: 2,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
