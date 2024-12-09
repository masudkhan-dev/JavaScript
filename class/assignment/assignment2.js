function checkName(name) {
  const vowels = ["a", "e", "i", "o", "u"];
  const lastLatter = name[name.length - 1];

  if (typeof name !== "string") {
    return "Invalid";
  } else if (vowels.includes(lastLatter)) {
    return "good name";
  } else {
    return "bad name";
  }
}

const FinalName = checkName("Hasan");
console.log(FinalName);
