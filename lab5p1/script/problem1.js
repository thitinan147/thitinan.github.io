let input;
let inputNum;
let arr = [];
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    // alert(i);
    arr.push(i);
  }
  let alertText = `For n = ${inputNum} prime numbers are ${arr}`;
  alert(alertText);
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

while (true) {
  input = prompt("Enter a positive integer");
  inputNum = Number(input);

  if (inputNum > 0 && !isNaN(inputNum) && Number.isInteger(inputNum)) {
    showPrimes(inputNum);

    break;
  }   
}
 