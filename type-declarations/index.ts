import axios from "axios";
import _ from "lodash";

_.sample([45, 25, 645, 45]);

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    stress: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>(`${url}/1`)
  .then((res) => printUser(res.data))
  .catch((e) => console.log("Error", e));

axios
  .get<User[]>(url)
  .then((res) => res.data.forEach(printUser))
  .catch((e) => console.log("Error", e));

const printUser = (user: User) => {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
};
