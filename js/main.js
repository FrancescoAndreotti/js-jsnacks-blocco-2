/* const num = parseInt(prompt("Inserisci un numero"));

if (num % 2 === 0) {
    console.log(num);
} else {
    console.log(num + 1);
} */


const array1 = [15, 2, 7];
const array2 = [5];


while (array2.length < array1.length) {
    array2.push(prompt("Inserisci un numero"));
}

console.log(array1, array2);