let tiempo = prompt("Ingrese la cantidad de años que viene laborando");
let bono = 0;

if (tiempo < 6){
    bono = tiempo*100;
}
else{
    bono=1000;
}

console.log("Se bono es de : S/. " + bono);