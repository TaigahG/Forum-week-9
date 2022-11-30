function digitalDecipher(m, k) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var rslt = "";
  const key = k.toString().split("");
  for (var i = 0; i < m.length(); i++) {
    rslt += alphabet[m[i] - 1 - key[i % key.length()]];
  }

  return rslt;
}

f = digitalDecipher([6, 4, 1, 3, 9, 20], 100);
g = digitalDecipher([20, 12, 18, 30, 21], 1939);
h = digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
console.log(f);
console.log(g);
console.log(h);
