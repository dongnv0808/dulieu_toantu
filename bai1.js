inputVatly = prompt("Nhap diem vat ly:");
inputHoahoc = prompt("Nhap diem hoa hoc:");
inputSinhhoc = prompt("Nhap diem sinh hoc:");
let vatly = parseInt(inputVatly);
let hoahoc = parseInt(inputHoahoc);
let sinhhoc = parseInt(inputSinhhoc);
if (inputHoahoc && inputSinhhoc && inputVatly <=10) {

let tbcong = (vatly + hoahoc + sinhhoc)/3;
let tong = vatly + hoahoc + sinhhoc;

document.write("Vat ly:" +inputVatly);
document.write("Hoa hoc:" +inputHoahoc);
document.write("Sinh hoc:" +inputSinhhoc);
document.write('<br>')
document.write("Diem trung binh =" + tbcong);
document.write('<br>')
document.write("Tong diem =" + tong);
}
else 
document.write("Khong nhap diem lon hon 10");

