// const inquirer = require("inquirer").default;
const promptSync = require('prompt-Sync')();

console.log("Dice Roller Application starts...")

/**
 * Roll a random dice side from a variable-sided dice
 * @param {number} [diceSide=6] The total number of sides in the dice
 * @returns {number} The side of the dice rolled
 */
function rollDice(diceSide=6) {
    if (diceSide <= 0) {
        throw new error("Dice sides must be greater than 0.");
    }
    let diceResult = 0;
    diceResult = Math.ceil(Math.random() * diceSide);
    return diceResult;
}

// console.log("The side you rolled is: " + rollDice());

// const prompt = inquirer.createPromptModule();

// used with inquire not used for promptSync
// prompt([
//     {
//         type: "number",
//         name: "dice_side",
//         message: "How many sided dice do you want to roll?"
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer))
// });

function getDiceSide() {
const diceSide = promptSync("How many sided dice do you want to roll? ");

try {
    const parsedDiceSide = parseInt(diceSide);
    if (isNaN(parsedDiceSide)) {
        throw new Error('Please enter a valid number.');
    }
    const diceResult = rollDice(parseDiceSide);
    console.log(`you rolled a ${diceResult}-sided dice.`);
}
catch {
    console.error("You got an error!");
}
}

getDiceSide();