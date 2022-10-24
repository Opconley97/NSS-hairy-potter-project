// Imports go first
const { makePottery } = require("./potteryWheel.js")
const { firePottery } = require("./kiln.js")


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Cylinder", 1, 6)
let bowl = makePottery("Circular",2.5,3)
let cup = makePottery("Cylinder", 0.8, 5)
let pot = makePottery("Square",5,8)
let vase = makePottery("Cylinder",3.5,18)

firePottery(mug, 2500)
firePottery(bowl, 2200)
firePottery(cup, 150000)
firePottery(pot, 1)
firePottery(vase, 1895)

console.log(mug)
console.log(bowl)
console.log(cup)
console.log(pot)
console.log(vase)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



