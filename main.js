#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: Number
    }
]);
//   12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    // = -= +=
    myBalance -= amountAns.amount;
    console.log("your remaning balance is: " + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
}
else {
    console.log("Incorrect pin number");
}
