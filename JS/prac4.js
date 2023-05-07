
const PHIHĐ_DAN = 4.5;
const phiCB_DAN = 20.5;
const phiCC_DAN = 7.5;

const PHIHĐ_DN = 15;
const phiCB_DN = 75;
const phiCC_DN = 50;

function calcCap(){

    var nhadan = document.getElementById("dan").value; 
    var doanhnghiep = document.getElementById("business").value; 
    
    var codekhach = document.getElementById("code").value; 
    var kenhcaocap = document.getElementById("numChan").value;
    
    var capnhadan = 0;
    var capnhadan = calcCBdan(PHIHĐ_DAN,phiCB_DAN );
    console.log(capnhadan);

    var capdoanhnghiep = phiHĐ + phiCoban;
    console.log(capdoanhnghiep);

    // document.getElementById("txtNotify4").innerHTML = "Diện tích = " + dientich + ", Chu vi = " + chuvi;

}

//ham tính phí cơ bản nhà dân 
function calcCBdan(phiCB, phiHĐ, DVCB) {
    var phiCB = 0;
    phiCB = phiHĐ + DVCB;
    console.log(phiCB);
    return phiCB;
}

//ham tính phí cơ bản doanh nghiệp
function calcCBdn(params) {
    
}

document.getElementById("btncalc4").onclick = calcCap;