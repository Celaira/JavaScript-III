/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window/Console.
* 2. A function called with dot notation attached to an object.
* 3. Utilizing an object constructor and then the `new` keyword.
* 4. The `.call()` and `.apply()` methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myFunction(fun) {
    console.log(this);
    return fun;
}

// Principle 2

// code example for Implicit Binding
const myObj = {
    greet: 'Hai',
    sayHello: function(name) {
      console.log(`${this.greet} my name is ${name}`);
    }
  };
  
  myObj.sayHello('Megan');

// Principle 3

// code example for New Binding
function myObject(person) {
    this.name = person;
    this.speak = function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

const me = new myObject("Megan");
const Gerard = new myObject("Gerard");
const Leilani = new myObject("Leilani");
me.speak();

// Principle 4

// code example for Explicit Binding
me.speak.call(Gerard);
me.speak.apply(Leilani);