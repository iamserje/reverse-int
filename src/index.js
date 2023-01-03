module.exports = function reverse (n) {
  const stringN = String(Math.abs(n));
  let res = [];
  for (i in stringN) {
   res.push(stringN[i]);
  }
   let final = '';
   for (i in res.reverse()) {
      final += res[i];
   }
   return +final;
}