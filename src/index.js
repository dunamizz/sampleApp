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
console.log('Hello'.length);
console.log(new String('Hello'));
console.log (Object.prototype.toString.call('Hello').slice(8,-1));
console.log (Object.prototype.toString.call(null).includes('Null'));
console.log (Object.prototype.toString.call(undefined).slice(8,-1));
console.log(String.prototype);
console.log(Number.prototype);

function makecarprice() {
    // return Object.prototype.toString.call(arguments).slice(8, -1);
    console.log(Object.prototype.toString.call(arguments).slice(8,-1))
    let newArr;
    if (Object.prototype.toString.call(arguments).slice(8, -1) === 'Arguments' ) {
        newArr = Array.from(arguments).reduce((next, previous) => next + previous)
    }
    console.log(newArr);
    // if (arguments.length != 3) {
    // console.log('This function requires three parameters');
    // console.log(Object.prototype.valueOf(arguments))
    // } else {
    //     console.log(arguments[0], arguments[1], arguments[2])
    // }
}

// const arr = [];
// console.log(Array.isArray(arr));

makecarprice(11, 22, 340);

const nums = [1, 2, 2, 3];

console.log(Object.prototype.toString.call(new Set(nums)));

function makecarpricerest(...all) {
    let reducer = (accumulator, currentvalue) => accumulator + currentvalue;
    const total = all.reduce(reducer);
    console.log(total);
    if (total > 2000) console.log('All good');
    else console.log('Fuck')
}

makecarpricerest(11, 23, 44, 29, 1000);

function makeCarePart(id) {
    const theid = `CAR_PART_${id}`;

    return function(name) {
        return `${theid}_${name.toUpperCase()}`
    };
}

const carPart = makeCarePart('xy675432');
console.log(carPart('Left Door'));
console.log(carPart('Right Door'));
console.log(carPart('Wind Shield'));