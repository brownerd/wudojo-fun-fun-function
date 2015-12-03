// Map - Part 2 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=bCqtb-Z5YGQ

import {animals} from '../data/data'
// import _ from 'lodash'

// console.log(JSON.stringify({animals}, null, 1))

// ES6
var peeps = animals.map(animal => animal.name)
console.log(peeps)

// Add a sring to output
var peepz = animals.map(x => `${x.name} as a ${x.species}`)
console.log(peepz)

// ES5
// var names = []
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }
//
// console.log(names)
