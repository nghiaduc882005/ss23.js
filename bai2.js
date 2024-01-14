function tinhGiaiThua(n) {
    let giaiThua = 1;
    for (let i = 1; i <= 0; i++){
        giaiThua *= i;
    }
    return giaiThua;
}

let soNhap = prompt("Nhap vao 1 so nguyen duong: ");
soNhap = parseFloat(soNhap);

if (soNhap > 0){
    let ketQua = tinhGiaiThua(soNhap);
    console.log("Giai thua cua ${soNhap} la: ${ketQua}");
} else {
    console.log("khong hop le vui long nhap lai !!!");
}