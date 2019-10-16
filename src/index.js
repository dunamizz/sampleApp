import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----

const number = 99;

const result = 
number === 1
    ? 'one'
    : number === 99
    ? 'Ninety nine'
    : number === 1000
    ? 'One thousand'
    : 'No match';

console.log(result);

const price = 9.33;
const quantity = 3;

console.log((price * quantity));


console.log(parseInt('55px', 7));
console.log(isNaN(NaN));

console.log(+'99.5555');

function roughScale(x, base) {
    let parsedValue = parseInt(x, base);
    if (isNaN(parsedValue)) return 0;
    return parsedValue * 100
}


console.log(roughScale('27.990000000000002px', 10));

console.log(Number.MAX_VALUE);
console.log(Number.NaN);
const item = 99;
console.log(typeof item.toString());
// const toString = Object.prototype.toString;
console.log(toString.call(null));
// console.log((new Date) .toString());