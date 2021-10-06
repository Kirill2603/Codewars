function abbrevName(name) {
  let abb = name.split(" ");
  let Name = abb[0].slice(0, 1);
  let SoName = abb[1].slice(0, 1);
  return Name.toUpperCase() + "." + SoName.toUpperCase();
}

console.log(abbrevName("Sam Harris"));
