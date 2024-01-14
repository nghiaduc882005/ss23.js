function fibonacciSum(limit) {
    let num1 = 0;
    let num2 = 1;
    let nextTerm = num1 + num2;
    let sum = 0;
  
    console.log(num1);
    console.log(num2);
  
    while (nextTerm <= limit) {
      console.log(nextTerm);
      sum += nextTerm;
      num1 = num2;
      num2 = nextTerm;
      nextTerm = num1 + num2;
    }
  
    console.log("Tổng giá trị của dãy Fibonacci là: " + sum);
  }
  
  let userInput = prompt("Nhập vào một số nguyên dương: ");
  fibonacciSum(parseInt(userInput));
  