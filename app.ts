let a: number = 5;
let b: string = String(a);
let c: number = Number(b);

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: "John",
  email: "j@j.com",
  login: "j@j.com",
};

interface Admin {
  name: string;
  role: string;
}

// неправильно и не удобно
const admin: Admin = {
  ...user,
  role: "admin",
};

// правильно
function userToAdmin(user: User): Admin {
  return { name: user.name, role: "admin" };
}
