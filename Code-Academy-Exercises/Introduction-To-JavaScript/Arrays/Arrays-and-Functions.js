const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr){newArr.pop()};
removeElement(concept);
console.log(concept);

I learned you can change an array inside a function and the change will be maintained outside the function as well
