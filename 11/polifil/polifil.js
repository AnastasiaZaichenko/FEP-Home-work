arr = [6, 5, 8, 7];

Array.prototype.max = function (a, b) {
  return this.reduce((a, b) => (a > b ? a : b));
};

console.log(arr.max());
