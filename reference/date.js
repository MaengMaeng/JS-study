let now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toLocaleTimeString());

let a = new Date(94, 6, 28);
let b = new Date(2020, 7, 2);
console.log(b - a);

let c = new Date(b-a);
console.log(c);

let d = new Date(0);
console.log(d);
console.log('year', d.getFullYear());

let e = new Date(60000);
console.log(e);