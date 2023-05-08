

// hàm chính 
function calcThue() {

    var hoten = document.getElementById("name").value;

    if(goiTen(hoten)){
        hoten = `Họ Tên: ${hoten} , `
    }else{
        hoten = ""
    }
   

    var tongthunhap = document.getElementById("sum").value;
    var nguoiphuthuoc = document.getElementById("numPeo").value;

    var total = bangthue(calcChiuthue(tongthunhap, nguoiphuthuoc));

    console.log(total);
    


    document.getElementById("txtNotify3").innerHTML = `${hoten} Tiền thuế thu nhập cá nhân: ${total.toLocaleString() }VND`

}

//hàm gọi tên
function goiTen(ten) {
    if (ten == "") {
       
       alert("Chưa nhập tên kìa!!!");
       return false;
       
    } 

    return true;
}

//hàm tính thu nhập chịu thuế
function calcChiuthue(thunhap, phuthuoc) {
    var totalCT = 0;
    totalCT = thunhap - 4e+6 - phuthuoc * 1.6e+6;
    console.log(totalCT);
    return totalCT;
}

//hàm tính thuế
function bangthue(CT) {
    if (CT <= 60e+6) {
        console.log("chịu thuế 5%")
        return CT * 0.05;

    } else if (60e+6 < CT  && CT<= 120e+6) {
        console.log("chịu thuế 10%")
        return (CT * 0.05) + (CT - 60e+6) * 0.1; //112.8 * 0,05 + 52.8 * 0,1 6140 + 

    } else if (120e+6 < CT && CT <= 210e+6) {
        console.log("chịu thuế 15%")
        return (CT * 0.05) + (CT - 60e+6) * 0.1 + (CT - 60e+6) * 0.15;

    } else if (210e+6 < CT && CT <= 384e+6) {
        console.log("chịu thuế 20%")
        return (60e+6 * 0.05) + (CT - 60e+6) * 0.2;

    } else if (384e+6 < CT && CT <= 624e+6) {
        console.log("chịu thuế 25%")
        return (CT * 0.05) + (CT - 60e+6) * 0.1 + (CT - 60e+6) * 0.15 + (CT - 60e+6) * 0.2 + (CT - 60e+6) * 0.25;

    } else if (624e+6 < CT && CT <= 960e+6) {
        console.log("chịu thuế 30%")
        return (60e+6 * 0.05) + (CT - 60e+6) * 0.3;

    } else if (960e+6 < CT) {
        console.log("chịu thuế 35%")
        return (60e+6 * 0.05) + (CT - 60e+6) * 0.35;

    } else {
        return "";
    }
}
document.getElementById("btncalc3").onclick = calcThue;