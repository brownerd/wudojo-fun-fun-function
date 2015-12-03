// Reduce Advanced - Part 4 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=1DMolJ2FrNY

// Reduce can also reduce some thing to another array or an object

// We are going to take the tab separated  info below

// mark johansson  waffle iron  80  2
// mark johansson  blender 200  1
// mark johansson  knife 10  4
// Nikita  Smith waffle iron  80  1
// Nikita  Smith knife 10  2
// Nikita  Smith pot 20  3

// and turn it into this:

// Import FileSystem
var fs = require('fs')

var output = fs.readFile('tab-separated-list.txt')

console.log(output)
