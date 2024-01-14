function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessedNumber;
  
    do {
      guessedNumber = prompt("Nhập vào một số từ 1 đến 10:");
      guessedNumber = parseInt(guessedNumber);
  
      if (guessedNumber > randomNumber) {
        alert("Lớn hơn!");
      } else if (guessedNumber < randomNumber) {
        alert("Nhỏ hơn!");
      } else {
        alert("Đúng!");
      }
    } while (guessedNumber !== randomNumber);
  }
  
  guessNumber();
  