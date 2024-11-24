// typescript is basically a language where type is important
// Number, String, Boolean
// Arrays, Tupples
// Any, Unknown, Never, Void
// enums
// Number, String, Boolean
var variable = 12;
var variable1 = "this thing is string";
var variable2 = ["this", "is", "an", "array"];
var variable3 = true || false;
// you don'e have to define type in the above cases. but if you are making a variable with no value you have to provide a type.
// let variable4; -> this will throw erroe because it's type will be any
// never use "any" type in ts.
var variable4; // write way
// Arrays, Tupples
var variable5 = ["this", "is", "an", "array"];
// already gave above an example;
// an array which will contain multiple types will be called as a tuple;
var variable6 = ["string", 23, true];
// Any, Unknown, Never, Void
// these are just interview question;
var variable7;
var variable8; // when you are not sure what will come here;
// function variable9(): never {
// return 12;
// }
function variable10() {
    console.log("the function which doesn't return anything is called a void type");
}
// enumurations || enums
// grouping of variables
var directions;
(function (directions) {
    directions["top"] = "TOP";
    directions["bottom"] = "BOTTOM";
    directions["left"] = "LEFT";
    directions["right"] = "RIGHT";
})(directions || (directions = {}));
var userDetails;
(function (userDetails) {
    userDetails["name"] = "samay";
    userDetails[userDetails["age"] = 34] = "age";
    userDetails["gender"] = "male";
})(userDetails || (userDetails = {}));
console.log(userDetails.name);
