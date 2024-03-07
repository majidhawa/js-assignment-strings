// Extract the last four characters from the string below;"extravaganza

let text = 'extravaganza';
let removechar = text.substring(8,0);
console.log({removechar});

// Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});

// Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

// find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
let result1 = string1.search("are");
let result2 = string2.search("sitting");
console.log({result1});
console.log({result2});

// Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world
// Uppercase : "wonderful"

let upper = "wonderful";
let uppercase = upper.toUpperCase();
console.log({uppercase});
// Lowercase : "amazing"
let lower = "amazing";
let Lowercase = lower.toLowerCase();
console.log({Lowercase});
let string = "undERneath";
let lowercase = string.toLowerCase();
console.log({lowercase});
// Title case
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("A wonderful world"));










