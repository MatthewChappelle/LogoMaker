const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

//will not let answer be blank
function validateNotEmpty(input) {
    if (input.length > 0) {
        return true;
    }
    return "Cannot be blank";
};

//ask user for input for their shape
const promptUser = async () => {
    const answers = await prompt([
        {
            type: "input",
            message:
                "Logo text? (up to three characters)",
            name: "text",
            validate: function (input) {
                if (input.length > 3) {
                    return "Logo text must no more than three characters.";
                }
                return validateNotEmpty(input);
            }
        },
        {
            type: "input",
            message:
                "Text color (name OR a hexadecimal number)",
            name: "textColor",
            validate: validateNotEmpty
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
            validate: validateNotEmpty
        },
    ]);

    //calls next function
    writeToFile("logo.svg", answers);
}
//creates logo
const writeToFile = (fileName, answers) => {
    //asigns empty string
    let svgString = "";
    //adds svg tag with basic info
    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    svgString += "<g>";
    //adds shape to svg
    svgString += `${answers.shape}`;

    //determines which shape to use based on input
    let shapeChoice;

    //filters through answers
    if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        shapeChoice.setColor(answers.shapeColor);
        svgString += shapeChoice.render();
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        shapeChoice.setColor(answers.shapeColor);
        svgString += shapeChoice.render();
    } else {
        shapeChoice = new Triangle();
        shapeChoice.setColor(answers.shapeColor);
        svgString += shapeChoice.render();
    };

    //adds text to svg
    svgString += `<text x="150" y="110" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    //writes file and saves it
    writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
};











promptUser();