"use strict";
class User {
    set login(l) {
        this._login = `user-${l}`;
    }
    get login() {
        return "no";
    }
}
const user = new User();
user.login = "test";
console.log(user);
console.log(user.login);
