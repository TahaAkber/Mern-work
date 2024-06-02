function sum(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log(total);
}

sum(10, 20, 40, 50);