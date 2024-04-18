// never функция никогда не вернет какое-то значение
const generateError = (message: string): never => {
  throw new Error(message);
};

const dumpError = (): never => {
  while (true) {}
};

type paymentAction = "refund" | "checkout" | "reject";

function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      // ...
      break;
    case "checkout":
      // ...
      break;
    default:
      const _: never = action;
      throw new Error("Unknown action");
  }
}
