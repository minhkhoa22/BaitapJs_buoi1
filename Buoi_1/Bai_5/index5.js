//Nhập số tự nhiên có 2 chữ số, sau đó tính tổng 2 chữ số đó
let so = Number(prompt("Nhập số tự nhiên có 2 chữ số: "));

// Lấy chữ số hàng đơn vị
let so2 = so % 10;

// Lấy chữ số hàng chục
let so1 = Math.floor(so / 10);

// Tính tổng 2 chữ số
let tong2chuso = so1 + so2;

alert("Tổng 2 chữ số đã nhập = " + tong2chuso);