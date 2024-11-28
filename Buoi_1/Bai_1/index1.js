// dùng prompt cho người dùng nhập số ngày làm việc
let soNgayLam = prompt("Nhập số ngày làm việc");
// tạo biến lương 1 ngày bằng 100.000 VND
let luong1Ngay = 100000;
// tạo biến tienLuong = Số ngày làm * Lương 1 ngày
let tienLuong = soNgayLam * luong1Ngay;
//dùng alert để popup cửa sổ thể hiện kết quả tiền lương
alert("tiền lương của bạn: "+ tienLuong + " VND");
