function hello(name) {
  if (name)
    return `Hello, ${
      name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()
    }!`;
  else return "Hello, World!";
}

console.log(hello("johN"));
