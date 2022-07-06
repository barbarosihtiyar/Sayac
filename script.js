const dakika=document.getElementById("dakika") ;
const saniye=document.getElementById("saniye") ;

const sayacdakika=document.getElementById("sayacdakika");
const sayacsaniye=document.getElementById("sayacsaniye");


const baslat=document.getElementById("baslat");
const sifirla=document.getElementById("sifirla");
 
let dur=false; 

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
sifirla.addEventListener("click",() => {
    dur = true;
    dakika.textContent="00";
    saniye.textContent="00";
    sayacsaniye.value="00";
    sayacdakika.value="00"; 
})
    function sayacbasla(){
    let minute = dakika.textContent;
    let second = saniye.textContent;
    
    const interval = setInterval(() => {
        
        second--;
        if(second == -1){
            minute--;
            second=59;
        }
        if((minute == 0 && second==0) || (minute==00 && second==0) ){
            clearInterval(interval);
            window.alert("Süreniz Doldu");
            sayacdakika.value=="00";
            sayacsaniye.value=="00";
        }
        if(dur){
            clearInterval(interval);
            return;
        }
       dakika.textContent = minute;
       saniye.textContent = second;
    },1000);

   
}

