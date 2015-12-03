// Higher-order functions - Part 1 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=BMUiFMZr7vk

import {animals} from '../data/data'
import _ from 'lodash'

var triple = function (x) {
  return x * 3
}

console.log(triple(3))

// Notes
//
// - Functions are values
// - Functions can be passed into other functions, hence higher-order functions
// - HO functions are good for Composition

// Filter

// Let's just get the dogs

// ES6
var dogs = animals.filter(animal => animal.species === 'dog')

// ES5
// var dogs = animals.filter(function (animal) {
//   return animal.species === 'dog'
// })

console.log(JSON.stringify({dogs}, null, 2))

// This is just a function that indicates if an animal is a dog
var isDog = animal => animal.species === 'dog'

var doggy = animals.filter(isDog)

console.log(isDog)
console.log(JSON.stringify({doggy}, null, 2))

// Reject using lodash
var otherAnimals = _.reject(animals, isDog)
console.log(JSON.stringify({otherAnimals}, null, 2))

// As a normal FOR Loop

// var perros = []
// for (var i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog') {
//     perros.push(animals[i])
//   }
// }
//
// console.log(JSON.stringify({perros}, null, 2))
