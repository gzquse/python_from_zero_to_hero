//basic input and output
alert("Hello, world.");
console.log("good")


//caculator
(10 + 2) / 2 + 4 * 2
12 / 2 + 4 * 2
6 + 4 * 2

15.234 === 15.234
15.234 !== 18.4545
'10' === 10
10 > 5
20.4 < 20.2
10 >= 10
10 <= 5

'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
//Never use the evil twins. 
//Instead, always use === and !==.

//variables
var surname = prompt('Greetings friend, may I enquire as to your surname?');

var surname;
var age;
var name = "Tom";
var age = 20;
name = "Andy";
age = 43;

var apples = 5, pears = 10;
var piecesOfFruit = apples + pears;
var piecesForEachPerson = piecesOfFruit / 3;

//conditional
if (10 > 5) {
    // Run the code in here
}


if (43 < 2) {
    // Run the code in here
} else {
    // Run a different bit of code
}

//loop
var i = 1;
while (i < 10) {
    alert(i);
    i = i + 1;
}
// i is now 10


for (var i = 1; i < 10; i++) {
    alert(i);
}

//By the way, i++ is equivalent to i = i + 1.


doSomething();
findAnInterestingThing();

//functions
var add = function (a, b) {
    return a + b;
};

var result = add(1, 2); // result is now 3

//object
var jedi = {
    name: "Yoda",
    age: 899,
    talk: function () { alert("another... Sky... walk..."); }
};

jedi.talk();
jedi.name = "Mace Windu";
jedi.lightsaber = "purple";

//Properties can be any kind of data including objects and arrays. 
//Adding an object as a property of another object creates a nested object:
var person = {
    age: 122
};

person.name = {
    first: "Jeanne",
    last: "Calment"
};


var dog = {};

dog.bark = function () { alert("Woof!"); };

//array
var emptyArray = [];

var shoppingList = ['Milk', 'Bread', 'Beans'];

shoppingList[0];
shoppingList[1] = 'Cookies';
shoppingList.length;
shoppingList.push('A new car');
shoppingList.pop();


var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

var helloFrom = function (personName) {
    return "Hello from " + personName;
}

for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}

//json 
{ "name": "Yoda", age: 894, "lightsaber" : { "color": "green" } }
var jsonString = JSON.stringify({
    make: "McLaren",
    model: "MP4-12C",
    miles: 5023
});
var car = JSON.parse(jsonString);
car.model = "P1";


//scope
var a = 10;
if (a > 5) {
    var b = 5;
}
var c = a + b; // Wouldn't work!

//function scope
var doSomething = function () {
    var a = 10;
};

doSomething();
console.log(a); // a is undefined

//scope
var a = 10;
if (a > 5) {
    var b = 5;
}
var c = a + b; // c is 15

//Variables are available in child scopes of their 
var doSomething = function () {
    var a = 10;
    var doSomethingElse = function () {
        console.log(a); // a is 10
    };
    doSomethingElse();
};

doSomething();


//Module Pattern use scope to make a private variable
function Counter(start) {
    var count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    }
}

var foo = Counter(4);
foo.increment();
foo.get(); // 5
foo.count // undefined ... outsider can't access count directly








IIFE: Anonymous Namespaces

Use IIFE to avoid namespace clashing!

(function() {
    // a self contained "namespace"

    // PUT YOUR NONE PUBLIC SCRIPT HERE
    // ...

    window.foo = function() {
        // an exposed closure
    };

})(); // execute the function immediately



//this
var test = {};
this; // this = global object aka window
foo(); // this = global object again
test.foo(); // this = test
new foo(); // this = newly created object
//Explicity Setting of this

function foo(a, b, c) {
  // this = bar here when foo is called from apply and call below
}
var bar = {};
foo.apply(bar, [1, 2, 3]); // array will expand to the below
foo.call(bar, 1, 2, 3); // results in a = 1, b = 2, c = 3


//"that"
var Foo = {a:1};
Foo.method = function() {
    var that = this;
    function test() {
        // Use that instead of this here
        // because here this is set to the global object
        console.log(this, that); // Window, {a:1, method: function}
    }
    test();
}

Foo.method = function() {
    function test() {
        // this is set to the global object
    }
    test();
}
//The Global Scope
this;

//Calling a Function
foo();

//Calling a Method
test.foo(); 

//Calling a Constructor
new foo(); 

//Explicit Setting of this
unction foo(a, b, c) {}

var bar = {};
foo.apply(bar, [1, 2, 3]); // array will expand to the below
foo.call(bar, 1, 2, 3); // results in a = 1, b = 2, c = 3



//regex
var regex = /^[a-z\s]+$/;
var lowerCaseString = 'some characters';

if (lowerCaseString.match(regex)) {
    alert('Yes, all lowercase');
}

var text = "There is everything and nothing.";

text = text.replace(/(every|no)thing/g, 'something');

var text = "Everything and nothing.";

text = text.replace(/(every|no)thing/gi, "something");


//A closure is a function that returns a function. 
var saver = function (value) {
    return function () {
        return value;
    };
};

var retriever = saver(10);

alert(retriever());


var add = function (a) {
    return function (b) {
        return a + b;
    };
};

var addFive = add(5);

alert(addFive(10));

var hello = add('Hello ');

alert(hello('tom'));


localStorage.setItem('name', 'tom');
var name = localStorage.getItem('name');

// Object example

localStorage.setItem('user', JSON.stringify({
    username: 'htmldog',
    api_key: 'abc123xyz789'
}));

var user = JSON.parse(localStorage.getItem('user'));


//errors and exception
JSON.parse("a");
try {
    JSON.parse("a"); // Produces a SyntaxError
} catch (error) {
    // Handle the error
    alert(error.message);
}    









//oop, using constructor
function Person(gender) {
  this.gender = gender;
}

Person.prototype.sayHello = function(){
  alert ('hello');
};

var person1 = new Person('Male'), person2 = new Person('Female');

// call the Person sayHello method.
person1.sayHello(); // hello


//OOP in Javascript: Inheritance
function Person(gender) {
  this.gender = gender;
}
Person.prototype.sayHello = function(){
  alert ('hello');
};
// inherit Person
Student.prototype = new Person();

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;

// replace the sayHello method
Student.prototype.sayHello = function(){
  alert('hi, I am a student');
}

var student1 = new Student();
student1.sayHello();

alert(student1 instanceof Person); // true
alert(student1 instanceof Student); // true


//Prototypal Inheritance

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functions inherit from Function.prototype (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null








