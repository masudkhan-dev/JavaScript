function getAge() {
  const ageField = document.getElementById("age");
  const ageValue = ageField.value;
  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageValue);

    if (isNaN(age)) {
      console.log("age not found", age, ageValue);
      throw "please enter your age";
    } else if (age < 18) {
      throw "baccha polapan not allow";
    } else {
      console.log(ageValue);
    }
  } catch (err) {
    console.error("error found", err);
    (errorTag.innerText = "Error"), err;
  } finally {
    console.log("all done");
  }

  console.log(1111);
}
