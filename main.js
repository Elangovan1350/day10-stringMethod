// string method
let fname = "elangovan";
let state = "tamil nadu";
let city = "bengaluru";
let course = "bca ";
let message = "happy birthday";
let sentance = "i love programing"


// 1
// charAt() method
// The charAt() method returns the character at the specified index in a string.

console.log("charAt method ==>", fname.charAt(4), " ", state.charAt(8));


// 2
// charCodeAt()
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

console.log("charCodeAt method ==>",fname.charCodeAt(3));

// 3
// codePointAt()
// The codePointAt() method returns an integer that denotes the Unicode point value of a character in the string.


console.log("codePointAt method ==>",message.codePointAt(5))


// 4
// concat() method
// The concat() method concatenates given arguments to the given string.

console.log(
  "concat method ==>",
  fname.concat(" ", city, " ", state, " ", course)
);


// 5
// The endsWith()
// The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.

console.log("endsWith method ==>",message.endsWith("day"));
console.log("endsWith method ==>",message.endsWith("happy"));
console.log("endsWith method ==>",message.endsWith("happy",5));


// 6
// fromCharCode()
// The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

console.log("fromCharCode method ==>",String.fromCharCode(72, 69, 76, 76, 79))


// 7
//  fromCodePoint
// The fromCodePoint() method returns a string created by using the given sequence of unicode code points.

console.log("fromCodePoint method ==> ",String.fromCodePoint(65,66,67,68,69,70,71))


// 8
// includes()
// The includes() method checks if one string can be found inside another string.

console.log("includes method ==> ",message.includes("happy"));
console.log("includes method ==> ",message.includes("birthday",6));



// 9
// indexOf()
// The string indexOf() method returns the index of the first occurence of the substring in a string.

console.log("indexOf method ==>",message.indexOf("day"))
console.log("indexOf method ==>",message.indexOf("p",1))


// 10
//  lastIndexOf()
// The lastIndexOf() method returns the last index of occurence of a given substring in the string.

console.log("lastIndexOf method ==>",message.lastIndexOf("p"))
console.log("lastIndexOf method ==>",message.lastIndexOf("p"))


// 11
// length
// The length property returns the number of characters in a string.

console.log("length method ==> ",sentance.length)


// 12
//  match()
// The match() method returns the result of matching a string against a regular expression.

message = "JavaScript is a fun programming fun language.";
let exp = '/fun\d/g';
console.log("match method ==> ", message.match(exp))


// 13
// matchAll()
// The matchAll() method returns an iterator of results after matching a string against a regular expression.

console.log("matchAll method ==> ", message.matchAll(exp))


// 14
// padEnd()
// The padEnd() method pads the current string with another string to the end.

console.log("padEnd method ==> ",course.padEnd(20,"*"))


// 15
// padStart
// The padStart() method pads the current string with another string to the start.

console.log("padStart method ==> ",course.padStart(20,"*"))

// 16
// repeat()
// The repeat() method creates a new string by repeating the given string a specified number of times and returns it.

console.log("repeat method ==> ",course.repeat(10))


// 17
// replace()
// The replace() method returns a new string with the specified string/regex replaced.

console.log("replace method ==> ",message.replace("fun","good"));


// 18
// replaceAll()
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.

console.log("replaceAll method ==> ",message.replaceAll("fun","good"));


// 19
// search()
// The search() method searches for a match between a given string and a regular expression.
console.log("search method ==> ",message.search("fun"));


// 20
// slice()
// The slice() method extracts and returns a section of a string.

console.log("sllice mathod ==> ",message.slice(10,20))


// 21
// split()
// The split() method divides a string into a list of substrings and returns them as an array.

console.log("split method ==> ",message.split(" "))

// 22
// startsWith()
// The startsWith() method returns true if a string begins with specified character(s). If not, it returns false.

console.log("startsWith method ==> ",message.startsWith("Java"))

// 23
// substring()
// The substring() method returns a specified part of the string between start and end indexes.
console.log("substring method ==> ",message.substring(10,31))

// 24
// toLowerCase()
// The toLowerCase() method returns the string converted to lowercase.

message="MY NAME IS ********"
console.log("toLowerCase method ==> ",message.toLowerCase())


// 25
// toUpperCase()
// The toUpperCase() method returns the string converted to uppercase.

message="my name is *********"
console.log("toUpperCase method ==> "+message.toUpperCase())


// 26
// trim()
// The trim() method removes whitespace from both ends of a string.

message="                         ell     gggo     "
console.log("trim method ==> ",message.trim())
console.log("trimStart method ==> ",message.trimStart())
console.log("trimEnd method ==> ",message.trimEnd())


// 27
// subStr()

message="elangovan"
console.log("subStr method ==> ",message.substr(4,5))
