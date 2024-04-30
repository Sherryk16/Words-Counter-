import inquirer from "inquirer";
const answers = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Enter a Sentence",
});
const words = answers.Sentence.trim().split("");
console.log(words);
console.log(`Your Sentence words are ${words.length}`);
