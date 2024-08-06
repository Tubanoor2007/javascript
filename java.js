//console.log("tuba");

//let message="the password is incorrect";
//console.log (message);
//alert(message);

//let hello="aquib";
//console.log(hello);

//var newdata="haris";
//console.log(newdata)

//let messagebox="world";
//messagebox="hello";
//console.log(messagebox);

//let admin;
//let name;alert(admin);
// name="tuba"
// admin=name;
// alert(admin);

//constant
//  const  birthday="08.12.2001";
//birthday="10.11.2001"; 
//console.log(birthday);

//data type in js
//.1number
//let n=123;
//let nf=12.344;
//console.log(nf);

//.2bigint
//let bigint =1234567890n;
//console.log(bigint);

//3.string
//let str="hello";
//let str2="single quotes are ok too";
//let phrase="${str} can embed another $[str2]";
//console.log(phrase);
//alert (the result is ${1+2})

//.4boolan
//let isGearter=4<1;
//alert(isGearter);
//console.log(4<1);

//.5null
//let age=null;
//console.log(age);

//.6undefine
//let data;
//console.log(data)

//.7object for more complex data structures.
//.8symbol for unique identifiers.

//basic operatos 

//addition
//let apples="2";
//let oranges="3";
//alert(apples+oranges);
//1.arithmathic opeartor
//a1=20;
//a2=30;
//a3=a1+a2;
//console.log(a3);

//2.assignment operator 
//a1 = 20;  //a1 = 20 + 30
//a1 += 30;
//console.log(a1);

//let n = 2;
//n += 5; // now n = 7 (same as n = n + 5)
//n *= 2; // now n = 14 (same as n = n * 2)
// alert( n ); // 14


// let x = 1;
// x = -x;
// alert( x ); //  unary negation was applied


//let z = 1, y = 3;
//alert( y - z ); 

//division  8 / 3
//alert( 8 % 3 ); 

// exponentional 2² 
//alert( 2 ** 2 ); // 2² = 4
//alert( 2 ** 3 ); // 2³ = 8
//alert( 2 ** 4 ); //2⁴ = 16

// '1' is string ...therefore value is 12
// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); 

// 3.string operator 
//let s = "my" + "string";
//alert(s); // mystring

// 4.increment and decement operator 
// ++x pre-increment ...increment x by 1 then return x 
// x++ post-increment ...return x than increment by 1
// --x pre-decrement ...decrement x by 1 then return x
// x-- post-decrement ...return x than decrement by 1

//let f;
//f = 10;
//console.log(++f);  //11
//console.log(f);     //11

//let g;
//g = 12;
//console.log(g++);  //12
//console.log(g);     //13

//let h;
// h = 10;
//console.log(--h);  //9
//console.log(h);     //9

//let i;
//i = 12;
// console.log(i--); //12
//console.log(i);  //11

//5.logical operator
// && Logical AND: true if both the operands/boolean values are true, else evaluates to false
// || Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false
// ! Logical NOT: true if the operand is false and vice-versa.

// AND &&
// const a = true, b = false;
//const c = 4;
//console.log(a && a); // true
//console.log(a && b);  // false
//console.log((c > 2) && (c < 2)); // false

//|| OR 
//const a = true, b = false, c = 4;
//console.log(a || b); // true
//console.log(b || b); // false
//console.log((c>2) || (c<2)); // true

//! NOT 
//const a = true, b = false;
//console.log(!a); // false
//console.log(!b); // true

// Arrays in JavaScript are a fundamental data structure used to store collections of values. 
// They can hold various data types, including numbers, strings, objects, functions, and even other arrays. 
// Arrays in JavaScript are zero-indexed, which means the first element is at index 0, 
// the second element is at index 1, and so on.

// Creating an Array:
// You can create an array using either array literals or the Array constructor.

// Using array literals
//const fruits = ["apple", "banana", "cherry"];
//.................. 0 ...... 1 ...... 2 ...

// Using the Array constructor
//const colors = new Array("red", "green", "blue");

//console.log(fruits[0]); // "apple"
//console.log(colors[1]); // "banana"

// Modifying Elements:
// You can change the value of an array element by assigning a new value to it.

//fruits[2] = "strawberry";
//console.log(fruits); // ["apple", "banana", "strawberry"]

// Array Length:
// You can find the number of elements in an array using the length property.

//console.log(fruits.length); // 3

// Array Methods:
// JavaScript provides a variety of methods to manipulate arrays. Some common array methods include:

// push(): Add an element to the end of the array.
// pop(): Remove the last element from the array.
// unshift(): Add an element to the beginning of the array.
// shift(): Remove the first element from the array.
// concat(): Concatenate two or more arrays.
// slice(): Create a new array by slicing a portion of an existing array.
// splice(): Add or remove elements from an array at a specified position.
// forEach(): Iterate over the array elements.
// map(): Create a new array by applying a function to each element of an existing array.
// filter(): Create a new array with elements that pass a specified condition.
// reduce(): Reduce an array to a single value using a callback function.
// find(): Find the first element that satisfies a condition.
// indexOf(): Find the index of a specified element.
// includes(): Check if an array contains a specified element.


// push(): Adds one or more elements to the end of an array and returns the new length of the array.
//const fruits = ["apple", "banana"];
//fruits.push("cherry", "date");
//console.log(fruits); // ["apple", "banana", "cherry", "date"]

// pop(): Removes and returns the last element from an array.
// const fruits = ["apple", "banana", "cherry"];
//const lastFruit = fruits.pop();
//console.log(lastFruit); // "cherry"
//console.log(fruits); // ["apple", "banana"]

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// const fruits = ["banana", "cherry"];
//fruits.unshift("apple", "date");
//0.console.log(fruits); // ["apple", "date", "banana", "cherry"]

// shift(): Removes and returns the first element from an array.
// const fruits = ["apple", "banana", "cherry"];
//const firstFruit = fruits.shift();
//console.log(firstFruit); // "apple"
//console.log(fruits); // ["banana", "cherry"]

// concat(): Combines two or more arrays and returns a new array.
// const fruits = ["apple", "banana"];
//const color = ["red", "green"];
//const combined = color.concat(fruits);
//console.log(combined); // ["apple", "banana", "red", "green"]

// slice(): Returns a shallow copy of a portion of an array into a new array.
// const fruits = ["apple", "banana", "cherry", "date"];
// const slicedFruits = fruits.slice(1, 3); // from index 1 (inclusive) to 3 (exclusive)
// console.log(slicedFruits); // ["banana", "cherry"]

// splice(): Adds or removes elements from an array at a specified index.
// const fruits = ["apple", "banana", "cherry"];
//fruits.splice(2, 2, "grape"); // Remove 1 element at index 1 and insert "grape"
//console.log(fruits); // ["apple", "grape", "cherry"]

// indexOf(): Returns the first index at which a given element is found in the array, or -1 if it's not found.
// const fruits = ["apple", "banana", "cherry"];
//const index = fruits.indexOf("banana");
// console.log(index); // 1

// includes(): Checks whether an element exists in the array and returns true or false.
// const fruits = ["apple", "banana", "cherry"];
//const hasCherry = fruits.includes("cherry");
//console.log(hasCherry); // true

// Iterating Through an Array:
// You can loop through the elements of an array using for loops, forEach(), for...of, or other looping constructs.

//for (let i = 0; i < fruits.length; i++) {
//console.log(fruits[i]);
//}

//fruits.forEach((i) => {
//console.log(i);
//});

//for (const fruit of fruits) 
// console.log(fruit);


// functions in javascript

//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

//<h1>Function Declaration</h1>

//function showMessage() {
//alert( 'Hello everyone!' );
//s}

//showMessage();
//showMessage();

//The call showMessage() executes the code of the function. Here we will see the message two times.
//This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.
//If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

//-------------------------------------------------------------------------------------------------------------------------------//

//<h1>Local variables</h1>
// A variable declared inside a function is only visible inside that function.

//function showMessage() {
//let message = "Hello, I'm JavaScript!"; // local variable
//alert( message );
//}

//showMessage(); // Hello, I'm JavaScript!
//alert( message ); // <-- Error! The variable is local to the function

//-------------------------------------------------------------------------------------------------------------------------------//

//<h1>Outer variables</h1>
//A function can access an outer variable as well, for example:

//let userName = 'John';

//function showMessage() {
//let message = 'Hello, ' + userName;
//alert(message);
//}

//showMessage(); //Hello, John

//The function has full access to the outer variable. It can modify it as well.
//For instance:

//let userName = 'John';

//function showMessage() {
//userName = "Bob"; // (1) changed the outer variable

//let message = 'Hello, ' + userName;
//alert(message);
//}

//---------------------------------------------//
//The outer variable is only used if there’s no local one.
//If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName.
//The outer one is ignored:
//let userName = 'John';

//function showMessage() {
//let userName = "Bob"; // declare a local variable

//let message = 'Hello, ' + userName; // Bob
//alert(message);
//}

// the function will create and use its own userName
//showMessage();

//alert( userName ); // John, unchanged, the function did not access the outer variable

//-------------------------------------------------------------------------------------------------------------------------------//

//<h1>Global variables</h1>
//Variables declared outside of any function, such as the outer userName in the code above, are called global.

//Global variables are visible from any function (unless shadowed by locals).

//It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. 
//Sometimes though, they can be useful to store project-level data.

//-------------------------------------------------------------------------------------------------------------------------------//

// <h1>Parameters</h1> 
//We can pass arbitrary data to functions using parameters (also called function arguments) .
//In the example below, the function has two parameters: from and text.

//function showMessage(from, text) { // arguments: from, text
//alert(from + ': ' + text);
//}

//showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//showMessage('Ann', "What's up?"); // Ann: What's up? (**)


//-------------------------------------------------------------------------------------------------------------------------------//

//<h2>Returning a value</h2>
//A function can return a value back into the calling code as the result.
//The simplest example would be a function that sums two values:

//function sum(a, b) {
//return a + b;

//}


//let result = sum(5,5 );

//alert( result ); // 10

//---------------------------------------------//
//The directive return can be in any place of the function. When the execution reaches it,
//the function stops, and the value is returned to the calling code (assigned to result above).
//There may be many occurrences of return in a single function. For instance:

//function checkAge(age) {
//if (age >= 18) {
//return true;
//} else {
// return confirm('Do you have permission from your parents?');
//}
//}

//let age = prompt('How old are you?', 18);

//if (checkAge(age)) {
//alert('Access granted');
//} else {
//alert('Access denied');
//}

//---------------------------------------------//
//It is possible to use return without a value. That causes the function to exit immediately.
//For example:

//function showMovie(age) {
//if (!checkAge(age)) {
// return;
//}

//alert("Showing you the movie"); // (*)



//var getUserRole = function (name, role) {
  
//switch (role) {
   
// case "admin":
      
//return `${name} is admin with all access`;
     
// break;
    
//case "subadmin":

//return `${name} is subadmin with access to create & delete courses`;

//break;

//case "testprep":

//return `${name} is testprep with access to create & delete test`;

//break;

//case "user":

//return `${name} is user with view access`;

//break;

//default:

//return "is a trial user";
 
//break;

//}

//};


//console.log(getUserRole("fauzan",









