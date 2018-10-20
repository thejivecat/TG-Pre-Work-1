const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = []
while (currentCard != ['spade'])
  {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
  }

I learned to create a while loop useful for when we want a loop to execute an undetermined number of times 
