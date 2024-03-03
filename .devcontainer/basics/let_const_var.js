"use strict" // all the js code is treated according to new version

const name="Aatrik" // const always has to be initialized and cant be changed

let age=12

//let age = 14 ->Error as with let we can't re initialize same variable

var roll = 9

var roll =11 // No error as with var same variable can be re-initialized 

{
    let age =15 // block scope

    var roll = 8 // global scope
}

console.log(age)

console.log(roll)

console.table([age,roll]) // in tabular form with columns of index and values