// Cong thuc: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- (Số người phụ thuộc * 1.6tr) * %
const THUE0_60 = 0.05;
const THUE60_120 = 0.1;
const THUE120_210 = 0.15;
const THUE210_384 = 0.2;
const THUE384_624 = 0.25;
const THUE624_960 = 0.3;
const THUE960_PLUS = 0.35;

function tinhThue() {
    var hoTen = document.querySelector('#hoTen_b3').value;
    var thuNhapNam = Number(document.querySelector('#thuNhap_b3').value);
    var phuThuoc = Number(document.querySelector('#phuThuoc_b3').value);

    // Payable income tax
    var tienThue = 0;

    if (0 < thuNhapNam && thuNhapNam <= 60000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE0_60;
    } else if (60000000 < thuNhapNam && thuNhapNam <= 120000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE60_120;
    } else if (120000000 < thuNhapNam && thuNhapNam <= 210000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE120_210;
    } else if (210000000 < thuNhapNam && thuNhapNam <= 384000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE210_384;
    } else if (384000000 < thuNhapNam && thuNhapNam <= 624000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE384_624;
    } else if (624000000 < thuNhapNam && thuNhapNam <= 960000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE624_960;
    } else if (thuNhapNam > 960000000) {
        tienThue = (thuNhapNam - 4000000 - (phuThuoc * 1600000)) * THUE960_PLUS;
    }
    
    document.querySelector('#kqBai3').innerHTML = 'Họ tên: ' + hoTen +  '. Tiền thuế thu nhập cá nhân: ' + tienThue.toLocaleString() + ' VND';
}
document.querySelector('#btnBai3').onclick = tinhThue;