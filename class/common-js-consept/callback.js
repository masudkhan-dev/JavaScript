function greeting(hello, name) {
  hello(name);
}

function hanlder(name) {
  console.log(`hello ${name} mama`);
}

greeting(hanlder, "JavaScript");
