import sayHello from "./fun";
import Test from "./test.html";
import Test2 from './test2.html';
sayHello();

document.querySelector("#root").innerHTML = Test + Test2;

