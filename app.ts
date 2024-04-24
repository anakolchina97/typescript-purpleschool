class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter((user) => user.name === name);
  }

  override toString(): string {
    return this.map((user) => user.name).join(", ");
  }
}

const users = new Users();
users.push(new User("Ivan"));
users.push(new User("Kate"));
console.log(users.toString());

class UserList {
  users: User[];

  push(user: User) {
    this.users.push(user);
  }
}

class Payment {
  data: Date;
}

class UserWithPayment extends User {
  userId: string;
}

class UserWithPayment2 {
  user: User;
  payment: Payment;

  constructor(user: User, payment: Payment) {
    this.payment = payment;
    this.user = user;
  }
}
