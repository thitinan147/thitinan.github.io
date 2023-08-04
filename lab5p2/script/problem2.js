let input;
let inputInt;
let list = [];
let average = 0;  
let min = 0;
let max = 0;

function readInput() {
  while (true) {
    input = prompt("Enter an integer (a negative integer to quit):");
    inputInt = parseInt(input);
    if (inputInt < 0) {
      break;
    }

    if (!isNaN(inputInt) && inputInt > 0) {
      list.push(inputInt);
    }
  }
  return list;
}

function displayStats(list) {
  let totalNum = list.length > 0 ? list.length : "empty";

  let sumNum = list.reduce((a, b) => a + b, 0);

  average = totalNum > 0 ? (sumNum / totalNum) : 0;
  min = totalNum > 0 ? Math.min(...list) : 0;
  max = totalNum > 0 ? Math.max(...list) : 0;

  alert(
    `For the list that is ${totalNum} \nthe average is ${average.toFixed(2)} \nthe minimum is ${min} \nand the maximum is ${max}`
  );
}

list = readInput();
displayStats(list);
