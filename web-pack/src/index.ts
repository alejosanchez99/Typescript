import Dog from "./dog";
import ShelterDog from "./shelter-dog";
import { add, divide, multiply } from "./utils";

console.log("FROM INDEX FILE!!!");

const elton = new Dog("Elton", "Aussie", 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog("Buffy", "Pitbul", 5, "Desert Springs Shelter");
