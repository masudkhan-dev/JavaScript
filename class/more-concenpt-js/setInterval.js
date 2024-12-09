let num = 0;

const countId = setInterval(() => {
  num++;

  if (countId < 10) {
    clearInterval(countId);
  }
  console.log(`i love you ${num} times`);
}, 2000); // 2000 = 2 second
