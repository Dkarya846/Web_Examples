var i=0;
function pop(){
    if(i==0){
        document.getElementById("item1").style.transform = "translateX(-150px)";
        document.getElementById("item2").style.transform = "translateY(-150px)";
        document.getElementById("item3").style.transform = "translateX(150px)";
        i=1;
    }
    else{
        document.getElementById("item1").style.transform = "translateX(0)";
        document.getElementById("item2").style.transform = "translateY(0)";
        document.getElementById("item3").style.transform = "translateX(0)";
        i=0;
    }
}