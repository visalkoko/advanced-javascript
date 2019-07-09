// Passing function as arguments
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
function isFullAge (el){
   return el >= 18;
}

var age = calAge(year, calculateAge);
var ageFull = calAge(age, isFullAge);
console.log(age);
console.log(ageFull);