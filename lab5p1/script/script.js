let arr = [];
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    // alert(i);
    arr.push(i);
  }
  // alert(arr)
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
  var input = prompt("Enter a positive integer");
  var inputNum = Number(input);

  if (inputNum > 0 && !isNaN(inputNum) && Number.isInteger(inputNum)) {
    showPrimes(inputNum);

    break;
  }
}
