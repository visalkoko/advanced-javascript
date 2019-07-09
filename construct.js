var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// Inheritance usage (inherit method)
Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
}
// Inherit properties 
Person.prototype.lastName = 'smith';

var john = new Person('visal', 1997, 'student');
var jane = new Person('jane', 1995, 'teacher');

john.calculateAge();
jane.calculateAge();
console.log(john.lastName); // john inherit from person

// Object.create

var personProto = {
    calc : function(){
        console.log(2019 - this.z);
    }
}
var jom = Object.create(personProto);
jom.name = 'jom';
jom.z = 1995; // modify age 
jom.calc();

// new type of object creation
var jam = Object.create(personProto, {
    name: {value : 'jam'},
    z: {value : 1999},
});
jam.calc();

// function return functions
function subject (job){
    if (job == 'designer'){
        return function (name) {
            console.log('Are you a designer ' + name);
        }
    }
    else if (job == 'teacher') {
        return function (name) {
            console.log('Are you a teacher' + name);
        }
    }
    else {
        return function (name) {
            console.log('You are not a teacher and designer' + name);
        }
    }
}

subject('designer')('john');
var jobb = subject('teacher');
jobb('koma');

// Immediately Invoked function expression or IIFE
// purpose obtain data privacy and code modularity
// want to create private variable

(function (goodLuck) {
    var score = Math.random() * 10;
    return console.log(score >= 5 - goodLuck);
})(5)


// Closures
function namee (job){
    return function (name){
        if (job == 'doctor'){
            console.log(name + 'is doctor');
        }
        else if (job == 'nurse'){
            console.log(name + 'is nurse');
        }
        else{
            console.log(name + 'dont have job');
        }
    }
}
namee('doctor')('kokoko');