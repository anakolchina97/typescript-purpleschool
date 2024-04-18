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

function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

// type guard
function isString(x: string | number): x is string {
  return typeof x === "string";
}

function isAdmin(user: User | Admin): user is Admin {
  return "role" in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  // user as Admin мы приводим пользователя к типу Admin
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = "zero";
  } else {
    throw new Error("Not an admin");
  }
}
