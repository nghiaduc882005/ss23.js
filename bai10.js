// Yêu cầu người dùng nhập vào số nguyên dương
let inputNumber = prompt("Nhập vào số nguyên dương:");

// In ra tam giác vuông loại 1
for (let i = 1; i <= inputNumber; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// In ra tam giác vuông loại 2
for (let i = inputNumber; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
