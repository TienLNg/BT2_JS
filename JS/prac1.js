
const KV_A = 2;
const KV_B = 1;
const KV_C = 0.5;

const DT_1 = 2.5;
const DT_2 = 1.5;
const DT_3 = 1;

document.getElementById("btncalc1").onclick = main
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
    

    var total = 0;
    total = calcUT (khuvuc, doituong, diemmon1, diemmon2, diemmon3);

    console.log(total);
   



    // document.getElementById("txtNotify1").innerHTML = "Tổng: " + total;

}

// 
function goiDiem(diemliet) {
    if (diemliet == "0 ") {
       
       return false;
       
    } 

    return true;
}


//điểm ưu tiên
function calcUT(kv,dt, đm1, đm2, đm3) {
    var totalUT = kv + dt + đm1 + đm2 + đm3;
    

    console.log(totalUT);
    return totalUT;
}

// điểm ko ưu tiên
function calcKUT(đm1,đm2,đm3) {
    var totalKUT = đm1 + đm2 + đm3
}
//so sánh điểm chuẩn
function calcChuan(đc, đt) {
    if (đt <= đc) {
        console.log("Rớt");
        return 
    } else {
        
    }
}