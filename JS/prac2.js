/**
 * B1: input
 * Num1, Num2, Num3, Num4, Num5
 * 
 * B2:
 * B1: tạo hàm, gắn hàm vào button
 * B2: trong hàm, tạo công thức tính
 * + total = (Num1 + Num2 + Num3 + Num4 + Num5)/5
 * 
 * 
 * B3: output
 * total (tổng giá trị trung bình)
 * 
 */


function calcAverage(){

    var Num1 = document.getElementById("Num1").value;
    var Num2 = document.getElementById("Num2").value;
    var Num3 = document.getElementById("Num3").value;
    var Num4 = document.getElementById("Num4").value;
    var Num5 = document.getElementById("Num5").value;

    // console.log("Num1, Num2, Num3, Num4, Num5 ");

    var total = (Num1 + Num2 + Num3 + Num4 + Num5)/5;

    // console.log("total");

    document.getElementById("txtNotify2").innerHTML = "Tổng = " + total.toLocaleString()

}

document.getElementById("btncalc2").onclick = calcAverage;