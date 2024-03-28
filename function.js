//question 1 reverse

function reverseStrings(arr, indices) {

    arr = arr.map(str => str.split('').reverse().join(''));


    indices.forEach(a => { if (a < arr.length) { arr[a] = arr[a].split('').reverse().join(''); } });


    return arr.sort();
}

const strings = ["apple", "banana", "orange", "grape", "Tomato", "Pineaple"]; const indicesToReverse = [0, 4];


const result = reverseStrings(strings, indicesToReverse);
console.log(result);

//question 2

function checkPositiveNegative(arr) {

    if (arr.some(num => num > 0)) { return "positive"; }

    else if (arr.some(num => num < 0)) {
        return "negative";

    } else { return "Zero"; }
}

const numbers1 = [0, 0, 0, 0];
console.log(checkPositiveNegative(numbers1));



//question 3

function sortEmployeesBySalary(employees) {

    return employees.sort((x, y) => x.salary - y.salary);
}


const employees = [{ id: 1, name: "Reine", salary: 100000 },
{ id: 2, name: "Digne", salary: 80000 },
{ id: 3, name: "Nectar", salary: 120000 }];
const sortedEmployees = sortEmployeesBySalary(employees);
console.log(sortedEmployees);

//question 4 

function multiplyByTwo(arrnumbers) {

    arrnumbers.forEach(num => { console.log(num * 2); });
}


const numbers = [10, 22, 13, 14, 25, 66];
multiplyByTwo(numbers);


function transformArray(arrnumbers) {

    const multipliedFirstFour = arrnumbers.slice(0, 4).map(num => num * 8);

    const addedLastTwo = arrnumbers.slice(-2).map(num => num + 5);

    const transformedArray = multipliedFirstFour.concat(addedLastTwo);

    console.log(transformedArray);
}

const num1 = [10, 22, 13, 14, 25, 66];
transformArray(num1);

//question 5

function transformArray(arr) {

    const multipliedFirstFour = arr.slice(0, 4).map(num => num * 8);

    const addedLastTwo = arr.slice(-2).map(num => num + 5);

    const transformedArray = multipliedFirstFour.concat(addedLastTwo);


    console.log(transformedArray);
}

const number = [1, 2, 3, 4, 5, 6];
transformArray(number);