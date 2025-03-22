let x;
let d = new Date();

console.log(d.toString());
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = new Intl.DateTimeFormat('en-US').format(d);
x = new Intl.DateTimeFormat('en-GB').format(d);
x = new Intl.DateTimeFormat('default').format(d);
x = new Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(new Intl.DateTimeFormat('default', { month: 'short' }).format(d));
console.log(new Intl.DateTimeFormat('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
}).format(d));

console.log(x);
