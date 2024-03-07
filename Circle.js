// Circle
// -radius:double = 1.0
// -color: String = "red"
// +Circle()
// +Circle(radius:double)
// +Circle(radius:double, color:String)
// +getRadius(): double
// +setRadius (radius:double):void
// +getColor(): String
// +setColor(color:String):void
// +toString(): String
// +getArea(): double
// +getCircumference():double

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const myCircle = new Circle(); 
console.log(myCircle.toString()); 

// Set new values for radius and color
myCircle.setRadius(2.5);
myCircle.setColor("blue");

// Get the updated values
console.log("Radius:", myCircle.getRadius()); 
console.log("Color:", myCircle.getColor()); 

// Calculate and print area and circumference
console.log("Area:", myCircle.getArea()); 
console.log("Circumference:", myCircle.getCircumference());
