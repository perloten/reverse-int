module.exports = function reverse (n) {
if (typeof n !== 'number') {
    throw new Error ('Wrong argument!');
}
  return Number(Math.abs(n).toString().split('').reverse().join(''));
}
