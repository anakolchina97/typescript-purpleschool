class User {
  _login: string;
  password: string;
  createAt: Date;

  set login(l: string) {
    this._login = `user-${l}`;
    this.createAt = new Date();
  }

  get login() {
    return "no";
  }

  getPassword(p: string) {}
}

const user = new User();
user.login = "test";

console.log(user);
console.log(user.login);
