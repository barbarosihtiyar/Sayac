const dakika=document.getElementById("dakika") ;
const saniye=document.getElementById("saniye") ;

const sayacdakika=document.getElementById("sayacdakika");
const sayacsaniye=document.getElementById("sayacsaniye");


const baslat=document.getElementById("baslat");
const sifirla=document.getElementById("sifirla");

sayacdakika.addEventListener("change", () => {
    if(sayacdakika.value < 10){
        dakika.textContent = "0" + sayacdakika.value;
    }
    else{
        dakika.textContent = sayacdakika.value; 
    }
    });

sayacsaniye.addEventListener("change", () => {
if(sayacsaniye.value < 10){
    saniye.textContent = "0" + sayacsaniye.value;
}
else{
    saniye.textContent = sayacsaniye.value; 
}
});

baslat.addEventListener("click",sayacbasla);

    function sayacbasla(){
    let minute = dakika.textContent;
    let second = saniye.textContent;
    
    const interval = setInterval(() => {
        
        second--;
        if(second == -1){
            minute--;
            second=59;
        }
       dakika.textContent = minute;
       saniye.textContent = second;
    },1000);

   
}

