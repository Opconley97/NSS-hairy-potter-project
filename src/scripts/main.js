// Imports go first

//New way to import a function, runnin this in dev tools instead of vscode

import { toSellOrNotToSell } from "./potteryCatalog.js"
import { makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js"
import { usePottery } from "./potteryCatalog.js"
import { potteryList } from "./potteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 6)
let bowl = makePottery("Bowl",2.5,3)
let cup = makePottery("Cup", 0.8, 5)
let pot = makePottery("Pot",5,8)
let vase = makePottery("Vase",3.5,18)

// Fire each piece of pottery in the kiln

firePottery(mug, 2500)
firePottery(bowl, 2200)
firePottery(cup, 150000)
firePottery(pot, 1)
firePottery(vase, 1895)

// Determine which ones should be sold, and their price

toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(cup)
toSellOrNotToSell(pot)
toSellOrNotToSell(vase)

// Invoke the component function that renders the HTML list

let potteryArray = usePottery();

let HTML = potteryList(potteryArray);

console.log(HTML)





/*console.log(mug)
console.log(bowl)
console.log(cup)
console.log(pot)
console.log(vase)*/