let horas_trabajadas = prompt("Ingrese las horas trabajadas");

let pago_horas = prompt("Ingrese el pago por hora");
let pago=0;

if(horas_trabajadas<=40){
    pago = horas_trabajadas * pago_horas;
}
else{
    pago = (pago_horas * 40)+((horas_trabajadas-40)*(pago_horas*2));
    
}

console.log(pago);