
// Array for cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
cardsInPlay.push(cardOne);
console.log("User Flipped Queen");
console.log("User Flipped King");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
   alert("You've found a match")
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
   alert("Sorry, try again!");
}
