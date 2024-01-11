//6.
window.alert("Hello! Ready for som calculation...");

//1.
let nr1 = Number(window.prompt("Enter a number!"));

//2.
let nr2 = Number(window.prompt("Enter another number!"));

let op;
let result;
let tryAgain;
do {
  //3.
  op = window.prompt("Select an operation (+ - * or /)");
  op = op.trim();
  tryAgain = false;

  //4.
  if (op === "+") {
    result = nr1 + nr2;
  } else if (op === "-") {
    result = nr1 - nr2;
  } else if (op === "*") {
    result = nr1 * nr2;
  } else if (op === "/") {
    result = nr1 / nr2;
  } /*5.*/ else {
    tryAgain = true;
    window.alert("Please enter a valid operation!");
  }
} while (tryAgain);

window.alert(`${nr1} ${op} ${nr2} = ${result}`);

//6.
window.alert("Good bye!");
