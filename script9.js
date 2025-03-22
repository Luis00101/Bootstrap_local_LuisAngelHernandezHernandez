const nombre = 'Juan';
const edad = 31;
let x;

x = 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años';

x = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;

const s = new String('Hola Mundo');

x = typeof s;

x = s.length;

x = s[0];


x = s.toUpperCase();
x = s.toLowerCase();


x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(2, 5);
x = s.substring(7);
x = s.slice(-11, -6);

x = x.trim();


x = s.replace('Mundo', 'Juan');

x = s.includes('Hol');

x = s.valueOf();

x = s.split('');

console.log(x); 
