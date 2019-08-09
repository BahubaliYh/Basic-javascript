const name = 'john';
const age = 30;
const ratings = 2.3;
const isCool = true;
const x = null;
const y = undefined;

console.log(typeof name);
console.log(typeof age);
console.log(typeof ratings);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);


console.log('my name is ' + name + ' my age is ' + age);

console.log(`my name is ${name} and I am ${age}`);

const hello = `my name is ${name} and I am ${age}`;

console.log(hello);

const s = 'hello world';

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.substr(0, 5).toUpperCase());

console.log(s.split(''));

const arr = 'bahubali,akshay,vinayak';
console.log(arr.split(','));

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1]);

fruits[3] = 'grapes';

fruits.push('mangos'); // add at the end of array

fruits.unshift('strawberries'); // add the at the beggening

console.log(fruits);

fruits.pop();

console.log(Array.isArray(fruits));

console.log(Array.isArray(s));

console.log(fruits.indexOf('grapes'));


//object literals
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 24,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, LastName, address: { city } } = person;
person.email = 'bahu@gmail.com';
console.log(firstName);
console.log(city);


//array objects
const todos = [{
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'work out',
        isCompleted: false
    },
    {
        id: 3,
        text: 'laundry',
        isCompleted: true
    }
];

console.log(todos);
console.log(todos[1].text);
const todoJSN = JSON.stringify(todos);
console.log(todoJSN);

// for loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while loops
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);

//conditions

const a = 10;
if (a === 11) {
    console.log('a is 10');
} else {
    console.log('a is not 10');
}

// turnary operators

const color = a > 10 ? 'red' : 'blue';
console.log(color);

// swithces 
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'pink':
        console.log('color is pink');
        break;
}

// functions

function addNums(num1, num2) {
    //console.log(num1 + num2);
    return num1 + num2;
}

let res = addNums(2, 3);
console.log(res);

// arrow functions

/*

const addNums2 = (n1, n2) => {
    return n1 + n2;
}
console.log(addNums2(2, 3));
-------------------------------------------
another type of declaration

const addNums2 = (n1, n2) => console.log(n1 + n2);
addNums2(2, 8); 

*/
const addNums2 = (n1, n2) => n1 + n2;
console.log(addNums2(12, 8));

// constrctor fucntions

function Const_person(_firstName, _lastName, dob) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this._firstName} ${this._lastName}`;
    }
}

// class

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Const_person('bahubali', 'yh', '2-11-1994');
const person2 = new Const_person('akshay', 'ka', '5-11-1995');

console.log(person1.getBirthYear());
console.log(person1.getFullName());