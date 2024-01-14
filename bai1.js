const number = +prompt("Nhap vao 1 so nguyen duong: ");
number = parseFloat(number);

if (Number.isInteger(number) && number > 0) {
    for (let i = 0; i <= number; i++){
        console.log(i);
    } 
    } else {
        console.log("Vui long nhap vao 1 so nguyen duong. ");
}
