// Bind, call and apply 

var john = {
    age: 20,
    name: 'john',
    job: 'student',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('You are ' + this.name + style + ', ' + timeOfDay + ', ' + this.age);
        }
        else if (style === 'informal'){
            console.log('You are ' + this.name + style + ', ' + timeOfDay + ', ' + this.age);
        }
        else{
            console.log('you are not');
        }
    }
}

var emily = {
    age: 30,
    name: 'emily',
    job: 'teacher'
}

// Call: call other variable using other variable
john.presentation('formal', 'morning');
john.presentation.call(emily, 'formal', 'afternoon');

// Apply: call other variable and using array in argument
// john.presentation.call(emily, ['friendly', 'afternoon']);

// Bind: set this variable explicitly, and not call function immediately
var johnFriendly = john.presentation.bind(john, 'formal');
johnFriendly('good morning');
johnFriendly('good afternooonn');

var emilyFriendly = john.presentation.bind(emily, 'informal');
emilyFriendly('good evening');


// Bind another example 

var year = [1990, 1996, 1995, 1999];
function calAge(arr, fn){
    var arrayRes = [];
    for (var i=0; i< arr.length; i++)
    {
        arrayRes.push(fn(arr[i]));
    }
    return arrayRes;
}

function calculateAge (el){
    return 2019 - el;
}
function isFullAge (limit, el){
   return el >= limit;
}

var age = calAge(year, calculateAge);
var fullage =calAge(age, isFullAge.bind(this, 20));
console.log(age)
console.log(fullage);