// Closures - Part 5 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=CQqwU2Ixu-U

var me = 'Bruce Wayne'
function greetMe () {
  console.log('Hello, ' + me + '!')
}
greetMe() // Hello, Bruce Wayne!

// function sendRequest () {
//   var requestID = '123'
//   $.ajax({
//     url: '/myUrl',
//     success: function(response) {
//       alert('Request ' + requestID + ' returned')
//     }
//   })
// }

// Closures - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeFunc () {
  var name = 'Mozilla'
  function displayName () {
    console.log(name)
  }
  return displayName
}

var myFunc = makeFunc()
myFunc()

// More examples

// In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument. In the above example we use our function factory to create two new functions — one that adds 5 to its argument, and one that adds 10.

// add5 and add10 are both closures. They share the same function body definition, but store different environments. In add5's environment, x is 5. As far as add10 is concerned, x is 10.

function makeAdder (x) {
  return function (y) {
    return x + y
  }
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(2))  // 7
console.log(add10(2)) // 12
