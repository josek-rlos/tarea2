let dinero = prompt("Cuanto dinero recibió en Diciembre");

if(dinero<10000){
    console.log("Usted puede adquirir el Paquete D: Par de Zapatos, Dos Camisas y Dos Pantalones");
}
else if(dinero<20000){
    console.log("Usted puede adquirir el Paquete C: Dos Pares de Zapatos, Tres Camisas y Tres Pantalones");
}
else if(dinero<50000){
    console.log("Usted puede adquirir el Paquete B: Una Grabadora, Tres Pares de Zapatos, Cinco Camisas y Cinco Pantalones");
}
else{
    console.log("Usted puede adquirir el Paquete A: Un Televisor, Un Modular, Tres Pares de Zapatos, Cinco Camisas y Cinco Pantalones");
}
