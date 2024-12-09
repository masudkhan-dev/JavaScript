class Teacher {
  constructor(name, subject, salary) {
    this.name = name;
    this.subject = subject;
    this.salary = salary;
  }

  lecture() {
    console.log("sir is teaching math");
  }
}

const tiger = new Teacher("tiger", "math", "40000");
console.log(tiger);

const habib = new Teacher("habibur sir", "math", "50000");
console.log(habib)
