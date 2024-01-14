function kiemTraSoHoanHao(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    if (sum === number) {
      console.log(`${number} là số hoàn hảo`);
    } else {
      console.log(`${number} không phải là số hoàn hảo`);
    }
  }
  
  let userInput = prompt("Nhập vào một số: ");
  let number = parseInt(userInput);
  kiemTraSoHoanHao(number);
  