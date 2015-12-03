// Reduce Advanced - Part 4 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=1DMolJ2FrNY

// Alright, this lesson was COOL but a bit of a brain bender

// Reduce can also reduce some thing to another array or an object

// We are going to take the tab separated  info below

// mark johansson  waffle iron  80  2
// mark johansson  blender 200  1
// mark johansson  knife 10  4
// Nikita  Smith waffle iron  80  1
// Nikita  Smith knife 10  2
// Nikita  Smith pot 20  3

// and turn it into this:

// .split('\n')

// [
// "mark johansson  waffle iron  80  2",
// "mark johansson  blender 200  1",
// "mark johansson  knife 10  4",
// "Nikita  Smith waffle iron  80  1",
// "Nikita  Smith knife 10  2",
// "Nikita  Smith pot 20  3"
// ]

// And then to this
// .map(line => line.split('\t'))

// [
//   [
//     "mark johansson  waffle iron  80  2"
//   ],
//   [
//     "mark johansson  blender 200  1"
//   ],
//   [
//     "mark johansson  knife 10  4"
//   ],
//   [
//     "Nikita  Smith waffle iron  80  1"
//   ],
//   [
//     "Nikita  Smith knife 10  2"
//   ],
//   [
//     "Nikita  Smith pot 20  3"
//   ]
// ]

// customers[line[0]] = []

// {
//   "mark johansson  waffle iron  80  2": [],
//   "mark johansson  blender 200  1": [],
//   "mark johansson  knife 10  4": [],
//   "Nikita  Smith waffle iron  80  1": [],
//   "Nikita  Smith knife 10  2": [],
//   "Nikita  Smith pot 20  3": []
// }

// Fuck this. webpack is crapping out on fs

// readFileSync is not a function

// var output = require('fs').readFileSync('../data/tab-separated-list.txt', 'utf8');

var output = `mark johansson,waffle iron,80,2
mark johansson,blender,200,1
mark johansson,knife,10,4
Nikita Smith,waffle iron,80,1
Nikita Smith,knife,10,2
Nikita Smith,pot,20,3`
.split('\n')
.map(line => line.split(','))
.reduce((customers, line) => {
  console.log('hello', line)
  customers[line[0]] = customers[line[0]] || []
  customers[line[0]].push({
    item: line[1],
    price: line[2],
    quantity: line[3]
  })
  return customers
}, {})

console.log(JSON.stringify({output}, null, 2))
