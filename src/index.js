module.exports = function solveEquation(equation) {
  // your implementation
  const [, a, b, c] = equation
    .replace(/\s/g, "")
    .match(/([-+]?\d+)?\*?x\^2([-+]?\d+)?\*?x([-+]?\d+)?/)
    .map(v => parseInt(v));
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return [];
  }
  if (D === 0) {
    return [-b / (2 * a)];
  }
  return [Math.round((-b - Math.sqrt(D)) / (2 * a)), Math.round((-b + Math.sqrt(D)) / (2 * a))].sort((a, b) => a- b);
}

