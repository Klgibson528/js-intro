// // Madlib
// function madlib (name, subject) {
//     console.log(name + "'s favorite subject in school is "+ subject);
// }
// madlib('Katy', 'biology')

// //Tip Calculator
// function tip(amount, quality) {
//   if (quality === "good") {
//     console.log(amount * 0.2);
//   } else if (quality === "fair") {
//     console.log(amount * 1.5);
//   } else if (quality === "bad") {
//     console.log(amount * 0.1);
//   }
// }

// //Tip Calculator 2
// function tip(amount, quality) {
//   if (quality === "good") {
//     console.log(amount + amount * 0.2);
//   } else if (quality === "fair") {
//     console.log(amount + amount * 1.5);
//   } else if (quality === "bad") {
//     console.log(amount + amount * 0.1);
//   }
// }

// //Print Numbers
// function printNumbers(a, b) {
//   var count = 0;
//   while (count < 10) {
//     count += 1;
//     console.log(count);
//   }
// }

//Print a Square
function printSquare(x) {
  var count = 0;
  while (count < x) {
    console.log("*" * x);
    count += 1;
  }
}
