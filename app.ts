class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("John");
console.log(user);
user.name = "Peter";
console.log(user);

class Admin {
  role: number;
}

const admin = new Admin();
admin.role = 1;
