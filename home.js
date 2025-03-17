document.getElementById("veg-op").checked=true;
function opt(x){
    var opt1=document.getElementById("opt-veg");
    var opt2=document.getElementById("opt-non-veg");
    if(x===1){
        opt1.style.display="inline-block";
        opt2.style.display="none";
    }
    if(x===2){
        opt1.style.display="none";
        opt2.style.display="block";
    }
    if(x===3){
        opt1.style.display="block";
        opt2.style.display="block";
    }

}