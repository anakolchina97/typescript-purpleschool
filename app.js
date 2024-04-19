"use strict";
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === "number") {
            this.age = ageOrName;
        }
        if (typeof age === "number") {
            this.age = age;
        }
    }
}
const user = new User("Peter");
const user2 = new User("John", 33);
const user3 = new User(33);
