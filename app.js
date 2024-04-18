var multiple = function (a, b) {
    return a * (b !== null && b !== void 0 ? b : 1);
};
console.log(multiple(1, 2));
console.log(multiple(3));
