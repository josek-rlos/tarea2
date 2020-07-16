let plan = prompt("Si desea el plan A escriba 1, si desea el plab B escriba 2 ");
let bebe = prompt ("Si bebe alcohol escriba 1 ");
let lente = prompt("Si utiliza lentes escriba 1 ");
let enfermo = prompt("Si padece una enfermedad, como deficiencia cardiaca o diabetes, escriba 1 ");
let edad = prompt("Si usted es mayor de 40 años escrina 1");

let costo = 0;
let baseUno = 1200;
let baseDos = 950;

debugger;
 
if (plan == 1){
    costo = baseUno;
    if(bebe == 1){
        costo = costo + (0.1*baseUno);
    }
    if(lente==1){
        costo = costo + (0.05*baseUno);
    }
    if(enfermo==1){
        costo = costo + (0.05*baseUno);
    }
    if(edad==1){
        costo = costo + (0.2*baseUno);
    }
    else{
        costo = costo + (0.1*baseUno);
    }
}
else{
    costo = baseDos;
    if(bebe == 1){
        costo = costo + (0.1*baseDos);
    }
    if(lente==1){
        costo = costo + (0.05*baseDos);
    }
    if(enfermo==1){
        costo = costo + (0.05*baseDos);
    }
    if(edad==1){
        costo = costo + (0.2*baseDos);
    }
    else{
        costo = costo + (0.1*baseDos);
    }
}

console.log("El costo de la poliza es de : S/. " + costo);