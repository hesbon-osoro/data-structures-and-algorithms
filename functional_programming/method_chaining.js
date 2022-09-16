let cart = [
  { name: 'Drink', price: 3.12 },
  { name: 'Steak', price: 45.15 },
  { name: 'Drink', price: 11.01 },
];

let drinkTotal = cart
  .filter(d => d.name === 'Drink')
  .map(drink => drink.price)
  .reduce((a, b) => a + b, 0)
  .toFixed(2);

console.log(`Drink Total: ${drinkTotal}`);
