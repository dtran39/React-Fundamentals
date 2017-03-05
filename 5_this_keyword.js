/*'this' keyword allow use to use function with different contexts. 4 rules:*/


/*- Implicit binding (80% of the use cases)
  + When a function is called by an object: 'this' refers to that object (the left of the dot)*/
  var me = {
    name: 'duc',
    age: 25,
    sayName: function(){
      console.log(this.name);
    }
  }
  me.sayName(); // print duc
  var Person = function(name, age) {
    return {
      name: name,
      age: age,
      sayName: function(){
        console.log(this.name);
      },
      mother: {
        name: 'jim mom',
        sayName: function(){
          console.log(this.name)
        }
      }
    }
  }
  var jim = Person('jim', 42);
  jim.sayName();
  jim.mother.sayName();
//----------------------------------------------------------------------------------------------------------------
// - Explicit Binding: explicitly apply the context to the function
var sayName = function(lang1, lang2){
  console.log('My name is ' + this.name + ' and I know '
               + lang1 + ' and ' + lang2);
}
stacy = {
  name: 'sta',
  age: 23
};
var languages = ['js', 'java', 'c'];
sayName.call(stacy, languages[0], languages[1]);

// each function has a .call() method,
// which we can pass an object in and make that object the context of this keyword as the first argument
// Each additional argument will be appied to the parameter of the function. ex: arg2 -> par1, arg3 -> par2
var sayName = function(lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know '
               + lang1 + ' and ' + lang2 + ' and ' + lang3);
}
stacy = {
  name: 'sta',
  age: 23
};
var languages = ['js', 'java', 'c'];
sayName.apply(stacy, languages);
// .apply is exactly like .call, but you can pass an array of arguments instead of one argument as a time like .call
var newFn = sayName.bind(stacy, languages[0], languages[1], languages[2]);
newFn();
// .bind() is exactly like call, but instead of invoke the function, it return another function that can be called later
//----------------------------------------------------------------------------------------------------------------
//- new binding
var Animal = function(color, name, type){
  // when an object is invoked through new keyword,
  // an object this = {} is created
  this.color = color;
  this.name = name;
  this.type = type;
}
var zebra = new Animal('red', 'duc', 'big');
console.log(zebra.name);
- window binding
The only questions: where is this function invoked
var sayAge = function(){
  console.log(this.age);
}
window.age = 35;
// this now default to the window object
sayAge();

// use strict mode to prevent accessing to the window
var sayAge = function(){
  'use strict';
  console.log(this.age);
}
window.age = 35;
// this now default to the window object
sayAge();
