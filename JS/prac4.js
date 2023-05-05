/**
 * B1: input
 * dai, rong
 * 
 * B2:
 * B1: tạo hàm, gắn hàm vào button
 * B2: trong hàm, tạo công thức tính
 * + dientich = dai * rong
 * + chuvi = ( dai + rong )*2
 * 
 * 
 * B3: output
 * dientich, chuvi (của hình chữ nhật)
 * 
 */


function calcHCN(){

    var dai = parseInt(document.getElementById("dai").value); 
    var rong = parseInt(document.getElementById("rong").value); 
    

    // console.log("dai, rong ");

    var dientich = dai * rong;
    var chuvi = ( dai + rong ) * 2;

    // console.log("dientich, chuvi");

    document.getElementById("txtNotify4").innerHTML = "Diện tích = " + dientich + ", Chu vi = " + chuvi;

}

document.getElementById("btncalc4").onclick = calcHCN;