const { prompt } = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const promptUser = async () => {
    const answers = await prompt([
        {
            type: "input",
            message:
                "Logo text? (up to three characters)",
            name: "text",
        },
        {
            type: "input",
            message:
                "Text color (name OR a hexadecimal number)",
            name: "textColor",
        },
        {
            type: "list",
            message: "Pick a shape",
            choices: ["Circle", "Triangle", "Square"],
            name: "shape",
        },
        {
            type: "input",
            message:
                "Shape color (name OR a hexadecimal number)",
            name: "shapeColor",
        },
    ]);
}

promptUser();