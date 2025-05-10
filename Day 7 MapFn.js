// example 1

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube)

function square(element) {
    return Math.pow(element, 2)
}
console.log(squares);

function cube(element) {
    return Math.pow(element, 3)
}
console.log(cubes);

// example 2

const students = ["mohamed", "shahid", "stellamarys", "kanyakumari"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

function upperCase(element){
    return element.toUpperCase()
}
console.log(studentsUpper);

function lowerCase(element){
    return element.toLowerCase();
}
console.log(studentsLower);



