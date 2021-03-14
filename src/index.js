module.exports = function reverse (n) {
  if (n < 0) {
      n *= -1;
  }

  let outputArray = n.toString().split('');
  outputArray.reverse();
  n = outputArray.join('');
  return n;
}
