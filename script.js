function repeatStr(n, str) {
  var s = "";
  for (var i = 0; i < n; i++) {
    s += str;
  }
  return s;
}

console.log(repeatStr(3, "*"));
