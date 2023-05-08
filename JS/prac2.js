
const KW50_DAU = 500;
const KW50_KE = 650;
const KW100_KE = 850;
const KW150_KE = 1100;
const CON_LAI = 1300;




// hàm chính
function main() {

    var HOTEN = document.getElementById("hoten").value;
    console.log(HOTEN);

    if (goiTen(HOTEN)) {
        HOTEN = `Họ Tên: ${HOTEN} , `
    } else {
        HOTEN = ""
    }


    var soKW = Number(document.getElementById("soKW").value);

  
    var total = "";
    total = calcSokW(soKW, KW50_DAU, KW50_KE, KW100_KE, KW150_KE, CON_LAI);
    console.log(total);


    document.getElementById("txtNotify2").innerHTML = `${HOTEN} Tiền điện: ${total.toLocaleString()}VND`;

}
// hàm gọi tên
function goiTen(ten) {
    if (ten == "") {

        alert("Chưa nhập tên kìa!!!");
        return false;

    }

    return true;
}
// hàm tính số điện
function calcSokW(sokW, gia_dau, gia100, gia100_200, gia200_350, giatren_350) {
    if (0 < sokW && sokW <= 50) {
        console.log("mức giá 1")
        return sokW * gia_dau;
    } else if (50 < sokW && sokW <= 100) {
        console.log("mức giá 2")
        return sokW * gia_dau + (sokW - 50) * gia100;
    } else if (100 < sokW && sokW <= 150) {
        console.log("mức giá 3")
        return (sokW * gia_dau) + ((sokW - 50) * gia100) + ((sokW - 100) * gia100_200);
    } else if (100 < sokW && sokW <= 150) {
        console.log("mức giá 4")
        return (sokW * gia_dau) + ((sokW - 50) * gia100) + ((sokW - 100) * gia100_200) + ((sokW - 200) * gia200_350);
    } else if (sokW > 150) {
        console.log("mức giá 5")
        return (sokW * gia_dau) + ((sokW - 50) * gia100) + ((sokW - 100) * gia100_200) + ((sokW - 200) * gia200_350) + ((sokW - 350) * giatren_350);
    } else {
        alert("Chưa nhập số điện đó fen!!!")
        return "";
    }
}

document.getElementById("btncalc2").onclick = main;