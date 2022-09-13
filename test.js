const numbers = [65, 35, 44, 43, 48, 95, 46];
// console.log(number);
function getOdd() {
  //   var sum = 0;
  //   var counts = 0;
  const oddOnes = numbers.filter((number) => number % 2 !== 0);
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (i % 2 !== 0) {
      counts++;
      var counts = 0;
      var sum = 0;
      sum = sum + number[i];
      //sum+=number[i]
    }
  }
  return `sum of ${counts} which are ${oddOnes} odd numbers is ${sum}`;
}

const res = getOdd();
console.log(res);
