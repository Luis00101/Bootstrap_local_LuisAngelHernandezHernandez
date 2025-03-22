let x; 
const num = new Number(5); 
// toString() devuelve una representación en cadena del número 
x= num.toString(); 
// Para obtener la longitud 
x= num.toString().length; 
// toFixed() devuelve una representación en cadena del número con un número especificado de decimales x = num.toFixed(2); 
// toPrecision() devuelve un número con la longitud especificada 
x = num.toPrecision(3); 
// toExponential() convierte un número a notación exponencial y devuelve su valor como una cadena x = num.toExponential (2); 
// toLocaleString() devuelve una representación en cadena del número, usando la configuración regional actual 
x = num.toLocaleString('en-US'); 
// valueOf Obtener valor 
x = num.valueOf(); 
// El objeto Number en sí tiene algunas propiedades y métodos 
// Número más grande y más pequeño posible 
Number.MAX_VALUE; 
Number.MIN_VALUE; 
console.log(x);