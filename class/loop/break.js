// break মানে থামা

for (let i = 0; i < 30; i++) {
  console.log(i);
  if (i >= 10) {
    break;
  }
}

console.log("life after break up");

// while loop

let n = 50;

while(n>20){
    console.log(n);

    if(n<30){
        break;
    }
    n--;
}