#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

// Printing a Welcome Message
console.log("\n\tWelcome To \'Interesting_Soul\' - CLI Simple Calculator\n");

// Asking Questions from Users through Inquirer

let answers = await inquirer.prompt([
    {message:"Enter First Number", type: "number", name: "firstNumber"},
    {message:"Enter Second Number", type: "number", name: "secondNumber"},
    { 
      message:"Select one operator to perform Operations",
      type:"list",
      name:"operator",
      choices:["Addition" , "Subraction" , "Multiplication" , "Division"] ,
    },
])

console.log(answers);

//Conditional Statements IF-ELSE 

if (answers.operator === "Addition")
  {
    console.log(answers.firstNumber + answers.secondNumber )
  }
else if (answers.operator === "Subraction") 
  {
    console.log(answers.firstNumber - answers.secondNumber)
  }
else if (answers.operator === "Multiplication") 
  {
    console.log(answers.firstNumber * answers.secondNumber)
  }
else if (answers.operator === "Division") 
  {
    console.log(answers.firstNumber / answers.secondNumber)
  }
else
   [
    console.log("invalid input")
   ]
