import {Animal,GztUtils,Circle} from "./utils"
import $ from "./jquery"


class Dog extends Animal{
  constructor(){
    super();
    console.log("==constructor dog");
  }
}

document.getElementById("demo").innerHTML=new Dog().sayHello();
$("#demo_2").html(GztUtils.add(10,5));
document.getElementById("demo_3").innerHTML=new Circle().sayCircleArea(1) ;





