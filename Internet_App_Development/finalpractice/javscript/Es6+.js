// console.log(arrFucn(10));

// let x;
// function arrFucn(x) {
//     return x;
// }

//teemplate literals

// let x = 4;
// let y = 5;
// console.log("Sum of numbers is", x, "and", y, "is", +(x + y));
// console.log(`sum of ${x} and ${y} is ${x + y}`);
// console.log("The sum of " + x + " and " + y + " is " + (x + y));

//Object destructuring

// let car = {
//   name: "honda",
//   model: "2008",
//   Engine: "Vx8",
// };

// function cardetails(car) {
//   console.log(car.name, car.model, car.Engine);
// }

// function cardetails2({ name, model, Engine }) {
//   console.log(name, model, Engine);
// }
// cardetails(car);
// cardetails2(car);

// let modelno = car.model;
// let name = car.name;

// console.log(modelno);
// let newname;
// newname = "Civic";
// car.name = newname;
// console.log(car.name);

// let newsubjects = {
//   first: "pst",
//   second: "urdu",
//   third: "ics1",
// };

// let subjects = ["math", "english", "physics"];
// let [firstSubject, secondsubject, thirdsubject] = subjects;

// console.log(firstSubject, secondsubject, thirdsubject);

//LOOP PRACTICE
// let sum = 0;
// let numb = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < numb.length; i++) {
//   sum = numb[i] + sum;
// }
// console.log(sum);

//Spread OPERATOR

// let list = [10, 20, 30];
// let newlist = [30, 40, 50, ...list];

// function testing() {
//   console.log({ ...list, list: newlist });
//   console.log(newlist);
// }
// testing();

//rest operator
// function sum(...nums) {
//   let total = 0;
//   for (let num of nums) {
//     total += num;
//   }
//   console.log(total);
// }

// sum(10, 20, 40, 50);
