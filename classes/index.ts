// class Player {
//   private readonly first: string;
//   private readonly last: string;
//   public score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("Secret Method!!");
//   }
// }

/*Shortcut*/

class Player {
  constructor(
    private first: string,
    private last: string,
    protected _score = 0
  ) {}

  private secretMethod(): void {
    console.log("Secret Method!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

const elton = new Player("Elton", "Steele");
elton.score = 324;
elton.fullName;
// elton.secretMethod();
// elton.first = "Alejo";

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  //   public color: string = "green";
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");
const jacket = new Jacket("Prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;
  greet() {
    console.log("HELLO!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hoursRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hoursRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
