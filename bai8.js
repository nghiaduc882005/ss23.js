function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  function printPrimesLessThanN() {
    let n = prompt("Nhập một số nguyên dương:");
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  printPrimesLessThanN();
  