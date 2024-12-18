// typescript is basically a language where type is important
// Number, String, Boolean
// Arrays, Tupples
// Any, Unknown, Never, Void
// enums

// Number, String, Boolean
let variable: number = 12
let variable1: string = "this thing is string"
let variable2: [string, string, string, string] = ["this", "is", "an", "array"]
let variable3: boolean = true || false;
// you don'e have to define type in the above cases. but if you are making a variable with no value you have to provide a type.
// let variable4; -> this will throw erroe because it's type will be any
// never use "any" type in ts.
let variable4: string; // write way

// Arrays, Tupples
let variable5: [string, string, string, string] = ["this", "is", "an", "array"]
// already gave above an example;

// an array which will contain multiple types will be called as a tuple;
let variable6: [string, number, boolean] = ["string", 23, true];

// Any, Unknown, Never, Void
// these are just interview question;
let variable7: any;
let variable8: unknown; // when you are not sure what will come here;
// function variable9(): never {
    // return 12;
// }

function variable10(): void {
    console.log("the function which doesn't return anything is called a void type")
}

// enumurations || enums
// grouping of variables
enum directions {
    top = "TOP",
    bottom = "BOTTOM",
    left = "LEFT",
    right = "RIGHT",
}
enum userDetails { 
    name = "samay",
    age = 34,
    gender = "male"
}

console.log(userDetails.name)

// type inference;
// typescript implicitly(automatically) defines types;
let variable11 = 12;
let variable12 = "string";
let variable13 = true;

// Union and intersection types
let variable14: string | null;
variable14 = "abcd"
variable14 = null

// intersection types etc
type cities = {
    name: string,
    population: number
}

type planet = {
    planetNumber: number,
    planetId: string
}

type citiesInPlanet = cities & planet;

let variable15: citiesInPlanet = {
    name: "Bhopal",
    population: 1230000,
    planetNumber: 122332324342,
    planetId: "hbj543k554j35h4jk365"
}


// primitive type aliases and object type aliases
// primitive 
type variable16 =  string;
let variable16: variable16; // accepts only only thing

// object
type Human = {
    name: string,
    age: number,
    email: string
}

let variable17: Human = {
    name: "Ayush",
    age: 19,
    email: "ayush@ayush.com"
}

// interface
// syntax
interface variable18 {
    name: string,
    age: number
}

interface variable19 extends variable18 {
    phone: number,
    isFollowing: true
}

const variable20 = (pops: variable19) => {
    return pops.age //etc
}

// class
// OOPS
// object oriented programming
// syntax

class variable21 {
    name = "ayush";
    age = 223;
    place = "danish nagar"
    city = "bhopal"

    isGettingUserDetails() {
        console.log("Getting user details");
    }
}