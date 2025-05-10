// Day 5 of JavaScript


// object = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
// };

// console.log(object.key1);



// example 1

const person1 = {
    firstName: "Mohamed",
    secondName: "Shahid",
    age: 21,
    isEmployed: false,
    sayHello: () => { console.log("Hey i'm Mohamed Shahid") },
    eat: () => { console.log("I love Veg Food") },


}

const person2 = {
    firstName: "Virat",
    secondName: "Kholi",
    age: 38,
    isEmployed: true,
    sayHello: () => { console.log("I'm Virat Kholi") },
    eat: () => { console.log("I love Poratta") },
}
console.log(person1.firstName);
console.log(person1.secondName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log("______________________");

console.log(person2.firstName);
console.log(person2.secondName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();

console.log(person1['firstName']);


// example 2

console.log("_________EXAMPLE 2______________________");
let intro = {
    name:"Shahid",
    tech:"javascript",
    pc:{
        cpu:"i4",
        ram:4,
        brand:"zebronics",
    }
    
}

delete intro.name
console.log(intro);
console.log(intro.pc.brand.length);


