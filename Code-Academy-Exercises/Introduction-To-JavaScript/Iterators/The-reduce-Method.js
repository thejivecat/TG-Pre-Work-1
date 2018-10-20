const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;

}, 10
                                );
console.log(newSum);
I learned to use .reduce() method to return a single value after iterating through the elements of an array (in this case it was adding the numbers of the array)
