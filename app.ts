let input: unknown;

input = 3;
input = [1, 2, 3];

function run(i: unknown) {
  if (typeof i === "number") {
    console.log(i * 2);
  } else if (typeof i === "string") {
    console.log(i.toLocaleLowerCase());
  }
}

run(input);

// кейс
async function getData() {
  try {
    await fetch("");
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}

async function getDataForce() {
  try {
    await fetch("");
  } catch (e) {
    // явный каст, но все может упасть
    const er = e as Error;
    console.log(er.message);
  }
}

type U1 = unknown | null; // union type с unknown всегда становится unknown
type I1 = unknown & number; // intersection type с unknown всегда другой тип
