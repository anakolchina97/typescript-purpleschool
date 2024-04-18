// void в TypeScript обозначает, что функция не возвращает никакого значения.

function logId(id: number | string): void {
  console.log(id);
}

// можем вернуть все что угодно, но в результате этот возврат будет игнорироваться.
type voidFunction = () => void;

const f1: voidFunction = () => {};
const f2: voidFunction = () => true;

const b = f2();

const skills = ["html", "css", "js"];

const user: {
  skills: string[];
} = {
  skills: [],
};

skills.forEach((skill) => user.skills.push(skill));
