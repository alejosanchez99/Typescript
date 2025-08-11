import type { Person } from "./types.js";

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logout`);
  }
}

export const userHelper = () => {
  console.log("User heelper");
};
