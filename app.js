"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter((user) => user.name === name);
    }
    toString() {
        return this.map((user) => user.name).join(", ");
    }
}
const users = new Users();
users.push(new User("Ivan"));
users.push(new User("Kate"));
console.log(users.toString());
