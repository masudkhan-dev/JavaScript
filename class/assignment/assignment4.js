function password(obj) {
  const newPass = [];
  for (const i of obj) {
    const pass1 = i.name;
    const pass2 = i.birthYear.toString();
    const pass3 = i.siteName;

    if (pass2.length === 4) {
      const final = pass3 + "#" + pass1 + "@" + pass2;
      newPass.push(final);
    } else {
      return "invalid";
    }
  }
  return newPass;
}

const person = [
  {
    name: "kolimuddin",
    birthYear: 1999,
    siteName: "Google",
  },
];

const result = password(person);
console.log(result);
