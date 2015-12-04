// Recursion - Part 7 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=k7-N8R0-KY4

// Recursion is when a function calls itself until it doesn't

let countDownFrom = (num) => {
  if (num === 0) return
  console.log(num)
  countDownFrom(num - 1)
}

// countDownFrom(10)

// Exercise

let categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'beagle', parent: 'dogs'},
  {id: 'lab', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'},
  {id: 'bumshiqua', parent: 'persian'}
]

// We want to make this from the categories

// {
//   animals: {
//     mammals: {
//       dogs: {
//         beagle: null,
//         lab: null
//       },
//       cats: {
//         persian: null,
//         siamese: null
//       }
//     }
//   }
// }

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = makeTree(categories, c.id))
  return node
}

console.log(JSON.stringify(
  makeTree(categories, null)
  , null, 2)
)
