// Import Triangle, Square, Circle classes from ./shapes.js
const { Circle, Triangle, Square } = require("./shapes.js");

//testing for a circle with red background to render
describe("Circle test", () => {
    test("make circle with a red background", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
    });
});

//testing for a triangle with a blue background to render
describe("Triangle test", () => {
    test("make a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

//testing for a square with a #08E8DE background to render
describe("Square test", () => {
    test("test for a square with a #08E8DE background", () => {
        const shape = new Square();
        shape.setColor("#08E8DE");
        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="#08E8DE" />');
    });
});