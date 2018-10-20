// Write your code below
const bobsFollowers = ['Mike', 'Sam', 'Jess', 'Olivia'];
const tinasFollowers = ['Jake', 'Olivia', 'Jess'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++)
    {
    for (let j = 0; j < tinasFollowers.length; j++) {
  if (bobsFollowers[i] === tinasFollowers[j]) {
    console.log(mutualFollowers.push(tinasFollowers[j]))
 	 }
	}
};

I learned how to create a nested loop to compare elements in two different arrays
