let userSection1 = document.querySelector(".expcnt1");
let userSection2 = document.querySelector(".expcnt2");
let userSection3 = document.querySelector(".expcnt3");
let userSection4 = document.querySelector(".expcnt4");
let userSection5 = document.querySelector(".expcnt5");
let arrow1 = document.querySelector(".experiencearrow1");
let arrow2 = document.querySelector(".experiencearrow2");
let arrow3 = document.querySelector(".experiencearrow3");
let arrow4 = document.querySelector(".experiencearrow4");
let arrow5 = document.querySelector(".experiencearrow5");
let isShow1 = false;
let isShow2 = false;
let isShow3 = false;
let isShow4 = false;
let isShow5 = false;
function showHideUsers1() {
    if(isShow1){
        userSection1.style.display= "none";
        isShow1=false;
        arrow1.innerHTML = ">";
    }
    else{
        userSection1.style.display= "flex";        
        isShow1=true;
        arrow1.innerHTML = "˅";

    }
}
function showHideUsers2() {
    if(isShow2){
        userSection2.style.display= "none";
        isShow2=false;
        arrow2.innerHTML = ">";
    }
    else{
        userSection2.style.display= "flex";
        isShow2=true;
        arrow2.innerHTML = "˅";
    }
}
function showHideUsers3() {
    if(isShow3){
        userSection3.style.display= "none";
        isShow3=false;
        arrow3.innerHTML = ">";
        
    }
    else{
        userSection3.style.display= "flex";
        isShow3=true;
        arrow3.innerHTML = "˅";
    }
}
function showHideUsers4() {
    if(isShow4){
        userSection4.style.display= "none";
        isShow4=false;
        arrow4.innerHTML = ">";
    }
    else{
        userSection4.style.display= "flex";
        isShow4=true;
        arrow4.innerHTML = "˅";
    }
}
function showHideUsers5() {
    if(isShow5){
        userSection5.style.display= "none";
        isShow5=false;
        arrow5.innerHTML = ">";
    }
    else{
        userSection5.style.display= "flex";
        isShow5=true;
        arrow5.innerHTML = "˅";
    }
}



let eduSection1 = document.querySelector(".edu1");
let eduSection2 = document.querySelector(".edu2");
let eduSection3 = document.querySelector(".edu3");
let eduarrow1 = document.querySelector(".eduarrow1");
let eduarrow2 = document.querySelector(".eduarrow2");
let eduarrow3 = document.querySelector(".eduarrow3");
let eduiShow1 = false;
let eduiShow2 = false;
let eduiShow3 = false;
function showHideeducation1() {
    if(eduiShow1){
        eduSection1.style.display= "none";
        eduiShow1=false;
        eduarrow1.innerHTML = ">";
    }
    else{
        eduSection1.style.display= "flex";        
        eduiShow1=true;
        eduarrow1.innerHTML = "˅";

    }
}
function showHideeducation2() {
    if(eduiShow2){
        eduSection2.style.display= "none";
        eduiShow2=false;
        eduarrow2.innerHTML = ">";
    }
    else{
        eduSection2.style.display= "flex";        
        eduiShow2=true;
        eduarrow2.innerHTML = "˅";

    }
}
function showHideeducation3() {
    if(eduiShow3){
        eduSection3.style.display= "none";
        eduiShow3=false;
        eduarrow3.innerHTML = ">";
    }
    else{
        eduSection3.style.display= "flex";        
        eduiShow3=true;
        eduarrow3.innerHTML = "˅";

    }
}
