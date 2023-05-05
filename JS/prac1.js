
const KV_A = 2;
const KV_B = 1;
const KV_C = 0.5;

const DT_1 = 2.5;
const DT_2 = 1.5;
const DT_3 = 1;


function main(){

    var diemchuan = document.getElementById("diemchuan").value;
    // console.log(diemchuan);
    var diemmon1 = document.getElementById("mon1").value;
    var diemmon2 = document.getElementById("mon2").value;
    var diemmon3 = document.getElementById("mon3").value;
    // console.log(diemmon1, diemmon2, diemmon3);
    
    var khuvuc = document.getElementById("Khuvuc").value;
    console.log(khuvuc);

    var doituong = document.getElementById("Doituong").value;
    

    var total = diemmon1 + diemmon2 + diemmon3 + khuvuc + doituong;

    // console.log("totalSal");


    

    document.getElementById("txtNotify1").innerHTML = "Tổng: " + total;

}
