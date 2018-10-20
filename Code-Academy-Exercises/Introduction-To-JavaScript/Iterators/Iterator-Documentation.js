const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(ok=> {return ok.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => { } ));
console.log(interestingWords.every(word => {return word.length>5}));
I learned how to check the documentation for different methods to ensure correct syntax and it's usage 
