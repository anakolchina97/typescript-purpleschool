const n: null = null;
const a: any = null;

interface User {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "John",
    } as User;
  }
}

const user = getUser();
const n55 = user?.name;
