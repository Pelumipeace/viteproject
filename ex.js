/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
//number
//this range from 0 to infinity
const pelumi = 123435445;

//string
// string is a sequence of characters within double or single quotes
const mySelf = "I am a self-taught developer";

//boolean
//it is either true or false
const isAwesome = false;

//checking if isAwesome is true
if (isAwesome === true) {
  console.log("I am not awesome");
} else {
  console.log("I am awesome");
}

const awesomeCheck = isAwesome === true ? "i am not awesome" : "i am awesome";
console.log(awesomeCheck);
//null
const akinStorage = null;

//undefined
const akin = undefined;

//()=> {} this is a function
//() => {} this is an anonymous function
//const myFunction = () => {} this is a named function

//arrays
// [] is an array
// arrays are list of values
// arrays are zero-indexed
// arrays can be of different types of values
const akinArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const pelumiBoolean = [true, true, true, true, false, false, false, false];
const filteredTrue = pelumiBoolean.filter((item) => item === true);
console.log(filteredTrue);
const filteredFalse = pelumiBoolean.filter((item) => item === false);
console.log(filteredFalse);
console.log(pelumiBoolean.indexOf(true));
const kingNumber = [1, 1, 2, 2, 3, 3, 3, 3];
console.log(kingNumber.indexOf(2));

const pelumiArray = ["a", "b", "c", "d", "e"];
const setArr = ["a", 1];

//Array Methods
//Array Methods takes a function as an argument. the function is called for each element in the array
//indexOf
//this can be use to know the postion of a value in an array
//referring to akinArray, we check for the position of 13 in the array. answer is 12
console.log(
  akinArray.indexOf(13),
  "how to check the index of a value in an array"
);

//length
console.log(akinArray.length, "how to check array lenght");

//joining arrays
//concat
const joinArray = pelumiArray.concat(akinArray, setArr);
console.log(joinArray, "joining using concat");

//or using spread operator ...
const joinArray2 = [...akinArray, ...pelumiArray, ...setArr];
console.log(joinArray2, "joining using spread operator");

//it can be any function
//map() is a method that returns a new array with the results of calling a provided function on every element in the calling array
// => is callback
//map() returns a new array of string values from joinArray
const convertAllToString = joinArray.map((item) =>
  typeof item === "number" ? item.toString() : item
);
console.log(convertAllToString, "convertAllToString");

const testToString = (item) => item.toString();
` `;
const test = joinArray.map(testToString);
console.log(test, "test");

//filter()
//filter() returns a new array with all elements that pass the test implemented by the provided function
const filteringForString = joinArray.filter((item) => typeof item === "string");
console.log(filteringForString, "filteringForString");

const filteringForNumber = joinArray.filter((item) => typeof item === "number");
console.log(filteringForNumber, "filteringForNumber");

//reduce()
//reduce() returns a single value after applying a reducer function to each element in the array
//reduce() returns a single value
//use reduce() to sum up all the numbers in filteringForNumber
const reduceArray = filteringForNumber.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(reduceArray, "reduceArray");

const davidStoreInArray = ["david", 27, "male", "enugu", "web developer"];

//object
//object is a collection of key-value pairs
const davidStoredInObject = {
  //keys: values
  name: "david",
  age: 23,
  gender: "male",
  address: "abuja",
  occupation: "web developer",
};

const objectKey = Object.keys(davidStoredInObject);
//it will return an array of keys
console.log(objectKey, "objectKey"); //["name", "age", "gender", "address", "occupation"]

const objectValue = Object.values(davidStoredInObject);
//it will return an array of values
console.log(objectValue, "objectValue"); //["david", 23, "male", "abuja", "web developer"]
