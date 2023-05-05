/**
 * B1: input
 * tienUsd
 * 
 * B2:
 * B1: tạo hàm, gắn hàm vào button
 * B2: trong hàm, tạo công thức tính
 * + tienVNĐ = tienUsd * 23500
 * 
 * 
 * B3: output
 * tienVNĐ (đổi ra tiền VN)
 * 
 */


function changeMoney(){

    var tienUsd = document.getElementById("usd").value;
    

    // console.log("tienUsd ");

    var tienVNĐ = tienUsd * 23500;

    // console.log("tienVNĐ");

    document.getElementById("txtNotify3").innerHTML = "Tiền VN = " + tienVNĐ.toLocaleString() + " VNĐ"

}

document.getElementById("btncalc3").onclick = changeMoney;