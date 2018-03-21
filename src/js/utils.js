﻿class Animal{
  constructor(){
    console.log("==constructor animal==") ;
  }

  sayHello(){  
      return "hello,Animal";
  }
}
 
let GztUtils={
  add(x,y){
     return x+y;
  }
}


class Circle{
  constructor(radius=1){
		this.PI = 3.14;
		this.nR = radius;
		this.sMessage = "半径为"+this.nR+"的圆面积:";
  }
  getArea(){  
    return this.PI * this.nR * this.nR;
  }
  sayCircleArea(){
		return this.sMessage + this.getArea();
  }
}

module.exports = {
  Animal: Animal,
  GztUtils : GztUtils,
  Circle : Circle
};




