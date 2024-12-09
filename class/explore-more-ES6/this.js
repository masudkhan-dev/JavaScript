class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`ghumiye ace ${this.name} mc`);
  }
  activity() {
    this.sleep();
  }
}

const tom = new Person("Tom", 24);
tom.sleep();
console.log(tom);

const jerry = new Person("Jerry", 23);
jerry.sleep();

const kobita = new Person("Kobita", 20);
kobita.activity;
console.log(kobita)