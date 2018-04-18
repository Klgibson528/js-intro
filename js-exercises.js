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

// //Print a Square
// function printSquare(x) {
//   var count = 0;
//   while (count < x) {
//     count += 1;
//     let str = '*';
//     console.log(str.repeat(x));
//   }
// }

// //Print a Box
// function printBox(x, y) {
//   var count = 0;
//   var str = '*';
//   var blk = ' ';
//   console.log(str.repeat(y));
//   while (count < x - 2) {
//     count += 1
//     console.log("*" + blk.repeat(y - 2) + "*")
//   }
//   console.log(str.repeat(y));
// }

// //Banner
// function banner(message) {
//   console.log('*'.repeat(message.length + 4));
//   console.log('* ' + message + ' *');
//   console.log('*'.repeat(message.length + 4));
// }

// //Leetspeak
// function leetspeak(message) {
//   let arr = [];
//   message = message.toLowerCase();
//   for (let i = 0; i < message.length; i++) {
//     switch (message[i]) {
//       case 'a':
//         arr.push('4');
//         break;
//       case 'e':
//         arr.push('3');
//         break;
//       case 'g':
//         arr.push('6');
//         break;
//       case 'l':
//         arr.push('1');
//         break;
//       case 'o':
//         arr.push('0');
//         break;
//       case 's':
//         arr.push('5');
//         break;
//       case 't':
//         arr.push('7');
//         break;
//       default:
//         arr.push(message[i])
//     }
//   }
//   console.log(arr.join(''));
// }

//Long-long Vowels
function longVowels(str) {
  count = 0;
  while (count < str.length) {
    count += 1;
    if (str[i] == str[i + 1]) {
      console.log(str[i].repeat(5));
    }
  }
}

// //Just the Positives
// function positiveNumbers(arr) {
//   var new_arr = arr.filter(function(n) {
//     return n > 0;
//   });
//   console.log(new_arr);
// }
