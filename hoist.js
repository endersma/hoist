console.log(hello);                                   
var hello = 'world'; 
//var hello gets hoisted to the top
//console.log(hello)
//log undefined
// hello = 'world

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle = 'haystack
//test(); We will get an error here because we invoked test before we assigned the function to it. Not sure what error. Will check after running it.
//Way off. function test gets hoisted above test()
//var needle = 'magnet'
//console.log(needle) logs 'magnet'

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//var brendan = 'super cool'
// function assigned to print
//console.log(brendan) logs 'super cool' since we never invoked the print function

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//var food = 'chicken'
//console.log(food) logs 'chicken'
//var food within function eat gets hoisted to the top
// food = 'half-chicken'
//console.log(food) logs 'half-chicken'
//food = 'gone' is not logged

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//var mean gets hoisted to the top
//this results in an error since no function is defined
//nothing gets logged
//after running, TypeError is the error. Error is due to mean() not being a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//var genre and function rewind are hoisted to the top
//console.log(genre) logs undefined, since it happens before genre is defined
//function rewind will log 'rock' first, followed by 'r&b'
//console.log(genre) will now log 'disco', since genre is now defined

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//function learn() is hoisted to the top
//var dojo is hoisted to the top in the function
//console.log(dojo) logs 'seattle', followed by 'burbank'
//console.log(dojo) logs 'san jose'
//console.log(dojo) logs 'san jose'
//after running, I forgot that the I believe the = acts as an anchor, so it won't move positions, logging 'san jose' first

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//I believe that this will give us an error for Chicago, since we have not defined hiring
//Berkeley will log 'closed for now'
//Way off. Chicago adds hiring=true to the list. We are trying to assign the dojo variable to be = closed for now, which gives an error. Read what the code is trying to do closer next time