"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("John");
console.log(user);
user.name = "Peter";
console.log(user);
