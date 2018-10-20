let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments)
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = ('Spoon');
console.log(utensils);
I learned you can rename an array if you used let to define it but not const, but you can redefine elements inside the array regardless of let or const
