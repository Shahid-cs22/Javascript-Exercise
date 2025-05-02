// Arrow Function Example 1

console.log("hello javascript")

// Arrow Function Example 2

const hello = () => console.log("You are Welcome");
hello();

// Arrow Function Example 3

const book = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You're ${age} years old`);
};

book("Shahid", 24);

// Arrow Function Example 4

setTimeout(() => console.log("hello shahid after 4 second"), 4000);


// Arrow Function Example 5

const number = [1,2,3,4,5,6];
const square = number.map((element) => Math.pow(element,2));
const cube = number.map((element) => Math.pow(element,3));
const evenNum = number.filter((element) => element % 2==0);
const total = number.reduce((accumulator ,element)=> accumulator*element); 

setTimeout(()=> {
    console.log(square);
},2000);

setTimeout(() => {
    console.log(cube);
},3000);

setTimeout(() => {
    console.log(evenNum);
},5000);

setTimeout(()=>{
    console.log(total)
},6000);