// Currying - Part 6 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=iZLP4qOwY8I

// Currying is when a functions doesn't use all of its arguments up front.
// Instead, the function wants to take the first argument and return a function that requires you to use the second argument and so on.

let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`

console.log(dragon('jim', 'xl', 'fire'))

// Curried example
let dragonz =
  name =>
    size =>
      element =>
        `${name} is a ${size} dragon that breathes ${element}!`

console.log(dragonz('larry')('xxxl')('lasers'))

// The idea with Currying is that
// your function can pass through your application
// and gradually recieve the arguments that it needs

let bozo = dragonz('bozo')
let tiny = bozo('tiny')

console.log(tiny('poo'))

// Here is another example that isn't curried
// but we are going to curry it

let drags = [
  {name: 'fizz', element: 'lasers'},
  {name: 'puffy', element: 'milk'},
  {name: 'zap', element: 'lasers'},
  {name: 'scoob', element: 'dancing'}
]

let hasElement =
  (element, obj) => obj.element === element

let laserDrags =
  drags.filter(x => hasElement('lasers', x))

console.log(JSON.stringify({laserDrags}, null, 2))
