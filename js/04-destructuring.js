// Destructuring: What, Why and How - Part 1 of ES6 JavaScript Features
// https://www.youtube.com/watch?v=PB_d3uBkQPs

var animal = {
  species: 'dog',
  wieght: 23,
  sound: 'woof'
}

var {species, sound} = animal

console.log(`The ${species} says ${sound}`)

// Destructuring makes it easier to deal with option objects

// Let's refactor this
// function makeSound (options) {
//   options.species = options.species || 'aminal'
//   console.log(`The ${options.species} says ${options.sound}!`)
// }

function makeSound ({species = 'animal', sound}) {
  console.log(`The ${species} says ${sound}!`)
}

makeSound({
  // species: 'dog',
  wieght: 23,
  sound: 'woof'
})
