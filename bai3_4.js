bankinh = prompt("Nhap ban kinh:");
let r = parseFloat(bankinh);
sr=r*r*3.14;
cr=2*r*3.14;
document.write("Ban kinh=" + r + " | " + "Dien tich hinh tron=" + sr + " | " +"Chu vi hinh tron=" + cr);
document.write('<br>');

duongkinh = prompt("Nhap duong kinh:");
let d = parseFloat(duongkinh);
sd=d*d/4*3.14
cd=d*3.14
document.write('<br>');
document.write("Duong kinh=" + d + " | " +"Dien tich hinh tron=" + sd + " | " + "Chu vi hinh tron=" + cd);