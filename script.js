function getMiddle(s) {
  while (s.length > 2) {
    s = s.slice(0, s.length - 1).slice(1);
  }

  return s;
}

console.log(getMiddle("test"));
