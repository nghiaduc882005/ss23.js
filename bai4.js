let soThuNhat = prompt("Nhập vào số a: ");
let soThuHai = prompt("Nhập vào số b: ");

soThuNhat = parseFloat(soThuNhat);
soThuHai = parseFloat(soThuHai);

function inSoChiaHetChoB(a, b) {
  for (let i = 1; i <= a; i++) {
    if (i % b === 0) {
      console.log(i);
    }
  }
}

inSoChiaHetChoB(soThuNhat, soThuHai);

  