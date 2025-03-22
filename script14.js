let d; 

d = new Date(); 
console.log(d.toString()); 

d = new Date(2021, 0, 10, 12, 30, 0); 

// Crear fecha desde una cadena 
d = new Date('2021-07-10T12:30:00'); 
d = new Date('07/10/2021 12:30:00'); 
d = new Date('2022-07-10'); 
d = new Date('07-10-2022'); 

let timestamp = Date.now(); 

d = new Date();
let timestampSpecific = d.getTime(); 

d = new Date(1666962049745); 

let timestampInSeconds = Math.floor(Date.now() / 1000); 

console.log(d);
console.log("Marca de tiempo actual:", timestamp);
console.log("Marca de tiempo de una fecha específica:", timestampSpecific);
console.log("Marca de tiempo en segundos:", timestampInSeconds);
