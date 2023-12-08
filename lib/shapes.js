// sets the color parameter for the shape to an empty string
class Shape {
  constructor() {
    this.color = "";
  };
  // takes in setColor function to fill in color parameter
  setColor(colorVar) {
    this.color = colorVar;
  };
};

class Circle extends Shape {
  render() {
    // returns circle with same color as input, within 300x200 box
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  };
};
// the following classes extend Shape class, so they inherit the properties previously defined to it
class Triangle extends Shape {
  render() {
    // returns triangle with same color as input, within 300x200 box
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  };
};

class Square extends Shape {
  render() {
    // returns square with same color as input, within 300x200 box
    return `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
  };
};



// Exports classes for use in index.js
module.exports = { Circle, Triangle, Square };
