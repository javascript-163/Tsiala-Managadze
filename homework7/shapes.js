class Shape {
 constructor(msg){
    this.msg = msg;
}   

    area() {
        return "Area calculation not implemented for generic shape. ";
    }
         
}
   class Circle extends Shape{
    constructor(name, radius) {
        super(name);
    this.radius = radius;
   

    }

  area() {
    return Math.PI * this.radius ** 2;
  }
} 
class Rectangle extends Shape {
  constructor(name, width, height){
    super();
    this.width = width;
    this.height = height;

  }
  area() {
    return this.width * this.height;
  }
}
class Triangle extends Shape {
  constructor(name, base, height) {
    super();
    this.base = base;
    this.height = height;

  }

  area() {
  return (this.base * this.height) / 2;
}
}
// vqmnit obieqtebs titoeuli figuristvis
let circle = new Circle("Circle", 5);
let rectangle = new Rectangle("Rectangle", 4, 6);
let triangle = new Triangle("Triangle", 3, 4);
let Shapemsg = new Shape(Shape);


console.log("Area of Circle: " + circle.area());
console.log("Area of Rectangle: " + rectangle.area());
console.log("Area of Triangle: " + triangle.area());
console.log(Shapemsg.area());
