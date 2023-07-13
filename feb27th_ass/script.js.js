let decbtn =document.getElementById("decbtn");
let incbtn =document.getElementById("incbtn");
let resbtn =document.getElementById("resbtn");
let valuebtn =document.getElementById("valuebtn");

decbtn.addEventListener("click",()=>{
    const rohith = Number(valuebtn.innerText);
    console.log(rohith);
    if (rohith>0){
        valuebtn.innerText= rohith - 1;
    }
    else {
        alert("negative numbers are not allowed");
    }
})

incbtn.addEventListener("click",()=>{
    const babu=Number(valuebtn.innerText);
    console.log(babu);
    if (babu>=10){
        alert("more than 10 values are not allowed");
    }
    else{
        valuebtn.innerText= babu + 1;
    }
})
        
resbtn.addEventListener('click',()=>{
    valuebtn.innerText=0;
    console.log("0");
})