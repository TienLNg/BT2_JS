
const KV_A = 2;
const KV_B = 1;
const KV_C = 0.5;

const DT_1 = 2.5;
const DT_2 = 1.5;
const DT_3 = 1;

document.getElementById("btncalc1").onclick = calcUT
function main(){

    var diemchuan = document.getElementById("diemchuan").value;
    // console.log(diemchuan);
    var diemmon1 = Number(document.getElementById("mon1").value);
    var diemmon2 = Number(document.getElementById("mon2").value);
    var diemmon3 = Number(document.getElementById("mon3").value);
    // console.log(diemmon1, diemmon2, diemmon3);
    
    var khuvuc = document.getElementById("Khuvuc").value;
    // console.log(khuvuc);

    var doituong = document.getElementById("Doituong").value;
    

    var totalUT = 0;
    // var totalUT = khuvuc(KV_A,KV_B,KV_C) + doituong(DT_1,DT_2,DT_3);
    // console.log(totalUT);
    



    // document.getElementById("txtNotify1").innerHTML = "Tổng: " + total;

}
//điểm ưu tiên
function calcUT(khuvuc,doituong) {
    var totalUT = khuvuc(KV_A,KV_B,KV_C) + doituong(DT_1,DT_2,DT_3);
    

    console.log(totalUT);
}



// function calcSum3mon(diemmon1,diemmon2,diemmon3) {
//     var total3mon = 0
//     total3mon = diemmon1 + diemmon2 + diemmon3 ;

//     return total3mon;
// }