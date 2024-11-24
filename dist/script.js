"use strict";
// typescript is basically a language where type is important
// Number, String, Boolean
// Arrays, Tupples
// Any, Unknown, Never, Void
// enums
// Number, String, Boolean
let variable = 12;
let variable1 = "this thing is string";
let variable2 = ["this", "is", "an", "array"];
let variable3 = true || false;
// you don'e have to define type in the above cases. but if you are making a variable with no value you have to provide a type.
// let variable4; -> this will throw erroe because it's type will be any
// never use "any" type in ts.
let variable4; // write way
// Arrays, Tupples
let variable5 = ["this", "is", "an", "array"];
// already gave above an example;
// an array which will contain multiple types will be called as a tuple;
let variable6 = ["string", 23, true];
// Any, Unknown, Never, Void
// these are just interview question;
let variable7;
let variable8; // when you are not sure what will come here;
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
// type inference;
// typescript implicitly(automatically) defines types;
let variable11 = 12;
let variable12 = "string";
let variable13 = true;
// Union and intersection types
let variable14;
variable14 = "abcd";
variable14 = null;
let variable15 = {
    name: "Bhopal",
    population: 1230000,
    planetNumber: 122332324342,
    planetId: "hbj543k554j35h4jk365"
};
