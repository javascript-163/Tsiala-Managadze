class Shape {
 constructor(name){
    this.name = name;
}   

    area() {
        console.log("Area calculation not implemented for generic shape.");
    }
         
}
   class Circle extends Shape{
    constructor(radius, name) {
        super();
    this.radius = radius;
    this.name = name;


    }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
