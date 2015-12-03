// Reduce basics - Part 3 of Functional Programming in JavaScript
// https://www.youtube.com/watch?v=Wl98eZpkp-c

import {orders} from '../data/data'
// import _ from 'lodash'

console.log(JSON.stringify(orders))

// Reduce is the multi-tool of list transformations
// Reduce can do any list transformation

// const orders = [
//   {amount: 250},
//   {amount: 400},
//   {amount: 100},
//   {amount: 325}
// ]

// ES6
var total = orders.reduce(function (sum, order) {
  console.log('hello', sum, order)
  return sum + order.amount
}, 0)

console.log(total)

// ES5
// var total = 0
// for (var i = 0; i < orders.length; i++) {
//   total += orders[i].amount
// }
//
// console.log(total)
