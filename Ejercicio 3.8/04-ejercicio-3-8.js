let sueldo = prompt("Ingrese sueldo");
let tiempo = prompt("Ingrese el número de meses de trabajo");
let bono = 0;

if(tiempo<25){
    if(sueldo<1000){
        bono=0.25*sueldo;
    }
    else if(sueldo>=1000 && sueldo<3500){
        bono=0.15*sueldo;
    }
    else{
        bono=0.1*sueldo;
    }
}
else if (tiempo<60){
    if(sueldo<1000){
        bono=0.25*sueldo;
    }
    else{
        bono=0.2*sueldo;
    }
}
else{
    bono=0.3*sueldo;
}

console.log("Le corresponde un bono de : S/." + bono);