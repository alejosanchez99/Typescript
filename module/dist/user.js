export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logout`);
    }
}
export const userHelper = () => {
    console.log("User heelper");
};
