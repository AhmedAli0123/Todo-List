#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What Do U Want To Add In Your Todo?"
        },
        {
            type: "confirm",
            name: "AddMore",
            message: "Do You Want TO Add More Todo",
            default: false
        }
    ]);
    const { TODO, AddMore } = answers;
    console.log(answers);
    loop = AddMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Please Add Valid Input");
    }
}
if (todos.length > 0) {
    console.log("Your Todo List : \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No Todo Found");
}
console.log(todos);
