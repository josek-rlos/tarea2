let cantidad_horas = prompt("Ingrese la cantidad de horas");
let pagar = 0;

if(cantidad_horas<3){
    pagar = cantidad_horas*5;
    console.log(pagar);
}
else if(cantidad_horas<6){
    pagar = ((cantidad_horas-2)*4)+10;
    console.log(pagar);
}
else if(cantidad_horas<11){
    pagar = ((cantidad_horas-5)*3)+22;
    console.log(pagar);
}
else{
    pagar = ((cantidad_horas-10)*2)+37;
    console.log(pagar);
}