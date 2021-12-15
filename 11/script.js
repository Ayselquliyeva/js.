let ekran =document.getElementById("ekran");
let show =document.getElementById("show");
function cevir(){
    let deyisen=ekran.value;
    let say =deyisen%10;
    let eded =Math.floor(deyisen/10);
    let hesab= eded%10;
    let cavab= Math.floor(eded/10);
    show.innerHTML=`${say}${hesab}${cavab}` ;

    
}

