function tinhDiem() {
    // Input điểm chuẩn
    const DIEMCHUAN = Number(document.querySelector('#inpDiemChuan').value);

    // Điểm ưu tiên theo khu vực
    var chonKV = document.querySelector('#chonKV');
    var diemKV = Number(chonKV.options[chonKV.selectedIndex].value);

    // Nếu ko được chọn KV, điểm KV = 0
    if (diemKV == '') {
        diemKV = 0;
    }
    
    // Điểm ưu tiên theo đối tượng
    var chonDT = document.querySelector('#chonDT');
    var diemDT = Number(chonDT.options[chonDT.selectedIndex].value);

    // Nếu ko được chọn DT, điểm KV = 0
    if (diemDT == '') {
        diemDT = 0;
    }

    // Input điểm sinh viên 
    var diem1 = Number(document.querySelector('#diem1').value);
    var diem2 = Number(document.querySelector('#diem2').value);
    var diem3 = Number(document.querySelector('#diem3').value);
    
    // Tổng điểm khi chưa cộng điểm ưu tiên
    var diem3Mon = diem1 + diem2 + diem3;

    // Tổng điểm đã cộng với điểm ưu tiên
    var tongDiem = diem3Mon + diemKV + diemDT;

    // So sánh với điểm chuẩn
    if (tongDiem >= DIEMCHUAN) {
        document.querySelector('#kqBai1').innerHTML = 'Bạn đã đậu. Tổng điểm: ' + tongDiem;
    } else {
        document.querySelector('#kqBai1').innerHTML = 'Bạn đã rớt. Tổng điểm: ' + tongDiem;
    }
}

document.querySelector('#btnBai1').onclick = tinhDiem;