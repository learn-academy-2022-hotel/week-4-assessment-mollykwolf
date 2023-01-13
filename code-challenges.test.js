// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe ("perseveringColors" , () => {
  it ("takes in an array, removes the first item from the array and shuffles the remaining content" , () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle",  "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(perseveringColors(colors1)).toEqual(expect.arrayContaining(colors1.slice(1)))
    expect(perseveringColors(colors2)).toEqual(expect.arrayContaining(colors2.slice(1)))
  })
})
// ReferenceError: perseveringColors is not defined
// > 24 |     expect(perseveringColors(colors1)).toEqual(expect.arrayContaining(colors1.slice(1)))
// // 27 | })
// at Object.expect (code-challenges.test.js:24:5)

// b) Create the function that makes the test pass.
// pseudo code 
// create a funtion called perservingColors
// input: an array
// output: an array that has the first item from the inputed array removed and shuffles the remaining content
// return 
// remove index 0 from the array (use .slice method)
// sort the array to be random (Math.random returns a number between 0 and 1, so half the time larger than .5 and half the time smaller than .5) and then sort (a, b) is taking the values in the array and comparing them to determine if a is bigger than b.

const perseveringColors = (array) =>{
    return array.slice(1).sort((a,b) => 0.5 - Math.random()) 
}
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
console.log(perseveringColors(colors1))
//   [ 'yellow', 'pink', 'green', 'blue' ]

// reference: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe ("endTally", () => {
  it ("takes in an object that contains up votes and down votes and returns the end tally.",  () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
      // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
      // Expected output: -31
  expect(endTally(votes1)).toEqual(11)     
  expect(endTally(votes2)).toEqual(-31)
  })
})
// ReferenceError: endTally is not defined

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
// pseudo code
// create a function called endTally 
// input: an object 
// output: number 
// destructe the object to break them into individual variables
// subtract the two variables from each other  

const endTally = (object) =>{
  return object.upVotes - object.downVotes
}

console.log(endTally(votes1))
// 11

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe ("noDuplicatesAllowed" , () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values." , () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDuplicatesAllowed(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// ReferenceError: noDuplicatesAllowed is not defined

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// pseudo code 
// create a function called noDuplicatesAllowed
// input : two arrays 
// output : one array with no duplicate values
// combine the arrays using the .concat method and store in a new variable 
// filter the  new array so there are no duplicates using the indexOf method (the indexOf method returns the first instance of the item)

const noDuplicatesAllowed = (array1, array2) =>{
  let array3 = array1.concat(array2)
  array3 = array3.filter((item,index) => {
    return (array3.indexOf(item) === index)
  })
  return array3
}
array3 = ["array", "object", "number", "string", "Boolean", "string", "null", "Boolean", "string", "undefined"]

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
console.log(noDuplicatesAllowed(dataArray1, dataArray2))

// refactor
const noDuplicatesAllowed = (array1, array2) =>{
  let array3 = [...array1, ...array2]
  return array3.filter((item,index) => {
    return (array3.indexOf(item) === index)
  })
}

console.log(noDuplicatesAllowed(dataArray1, dataArray2))

//reference : https://sdlearn.slack.com/archives/D04DJJ5K3L5/p1673219693595019