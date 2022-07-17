// console.log('Hello world!')
// console.log('Anshu Chauhan')
//variables
// let name = 'naman bhola'
// console.log(name)

// let sentence = 'I am doing javascript and i will stick to it for 5 days'

// food = Number(prompt('How much was the food?'))
// tipPercentage = Number(prompt('tip percentage?')/100)

// tipAmount = food*tipPercentage
// totalAmount = tipAmount + food

// console.log('tip amount :',tipAmount)
//  console.log('total :',totalAmount)
// alert(tipAmount)

//data types
// arrays,string,number,object , boolean

//math methods
//floor ,ceil ,random

//Baby weather app
// let weather = prompt('How is the weather?')
// if(weather == 'rain'){
//   console.log('Grab your umbrella')
// }
// else{
//   console.log('Grab your sunglasses')
// }

//functions
// function sayMyName (name){
//   console.log(name)
// }
// sayMyName('Anshu')

// function greeting(name) {
//   // greet = 'Hello ' + name + ", Nice to meet you!"
//   greet = `Hello ${name} , nice to meet you!`
//   console.log(greet)
// }
// greeting('Steve Jobs')

// function sum(a,b){
//   return a+b
// }

// sum(1,2)

//ES6
//Arrow function with explicit return
// const arrowsum = (a, b) => {
//   return a + b
// }
// // arrow function with implicit return
// function sum(a, b) {
//   return a + b
// }

// console.log(arrowsum(4, 5))

// const result = () => console.log(sum(5, 6))
// result()

//Arrays

// const groceries = ['apple', 'orange', 'banana', 'pear']
// console.log(groceries)

// groceries.push('cookie')
// console.log(groceries)

// groceries.push('blueberry')
// console.log(groceries)

// //start from 0 inclusive upto 2
// //array slice
// console.log(groceries.slice(0,3))

// //array method = length, slice, push ,indexof
// console.log(groceries.length)

// //OBJECTS {}
// const student = {
//   name: 'Anshu Chauhan',
//   enroll: 20102089
// }
// //acces object - dot notation & bracket notation
// // console.log(student.name)
// // console.log(student.enroll)

// console.log(student['name'])
// console.log(student['enroll'])

// //assign object
// student.phone = 9149250161
// student['batch'] = 'A3'
// console.log(student.phone)
// console.log(student.batch)

// console.log(student)

//es6 arrow function,template literals,objects
// const introduction = (name, shirt) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     assets: 100000,
//     liabilities:  50000,
//     networth: function() {
//       return this.assets - this.liabilities
//     }
//   }
//   const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.networth()}`
//   return intro
// }

// console.log(introduction('Anshu', 'Black'))

// const fruits = ['apple', 'orange', 'banana', 'pear']

// for (const it of fruits) {
//   console.log(it)
// }
// const numbers = [1, 2, 3, 4, 5, 6]

// const square = (numbers) => {

//   let result = []
//   for (const it of numbers) {
//     result.push(it * it)
//   }
//   return result
// }
// console.log(square([1,2,3,4,5,6]))

const howManyLetters = (phrase) => {
  // let result = 0
  // for(const index in phrase){
  //   // console.log(Number(index)+1)
  //   result = Number(index) +1
  // }

  return {
    letters: phrase.length,
    phrase: phrase,
  };
};
// const phrase = prompt("write your phrase!")
// console.log(howManyLetters(phrase))

const sumArray = (numbers) => {
  let result = 0;
  for (sum of numbers) {
    result = result + sum;
  }
  //for loop
  return { result };
};
// console.log(sumArray([1,2,3,4]))

const max = (numbers) => {
  let result = numbers[0];

  for (number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return { result };
};
// console.log(max([1,2,3,5,8,10]))

const letterfrequency = (phrase) => {
  console.log(phrase);
  //make a frequency object
  let frequency = {};
  for (letter of phrase) {
    //check if the letter exist in the frequency
    //increment the value by +1
    if (letter in frequency) {
      frequency[letter]++;
    }
    // otherwise set the value to one
    else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};
// console.log(letterfrequency('lol lol'))

const wordfrequency = (phrase) => {
  
  const array = phrase.split(" ");
  return letterfrequency(array)
   
};

// console.log(wordfrequency("lol you are stupid lol"));

//higher order function 
// map loops and returns array
// reduce
// filter loops and returns an array with matching conditions
// foreach

//MAP
// let numbers = [1,2,3,4,5,6]
// console.log(numbers.map(number => number*2))

 
const doubleMap = (numbers)=>{
  return numbers.map(number => number*2)
}
// console.log(doubleMap([1,2,3,4]))

//FOREACH
// numbers.forEach(number => console.log(number))

//FILTER
// const filter = (numbers , greaterThan) =>{
//   let result = []
//   for(const number of numbers){
//     if(number > greaterThan){
//       result.push(number)
//     }
//   }
//   return result
// }
// console.log(filter([1,2,3,4,5,6],3))

//FILTER
// console.log(numbers.filter(num => num >4))
// console.log(numbers.filter(num => (num >4 || num <3)))


const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber', netWorth: 10 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]

// console.log(actors.reduce((prev,curr) => prev+curr.netWorth,0))
// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)

// let names = result.map(actor => actor.name).join(', ')
// console.log(names)

//REDUCE : sum
//reduce takes in a fuction as an arguement
//reduce loops and gives you back the accumulator

let nums  = [1,2,3,4]

function sum (a,b){
  return a+b
}

function mul (a,b){
  return a*b
}

// const result = nums.reduce(mul)
//  const result = nums.reduce((prev,curr) => prev+curr)
// const result = nums.reduce((prev,curr) => prev+curr ,10)  //reduce takes 2 arguements fuction and number
// console.log(result)

