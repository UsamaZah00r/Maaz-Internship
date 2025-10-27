
// console.log("Hello World!");
// console.log("Hello World!");
// console.warn("This is a warning!")
// console.error("This is a error.")
// console.log(a);
// console.log(b);


// let a = 10
// var b = 30
// const c = 40

// console.log(a,b,c);



// function myName(){
//     var name = "Usama"
//     console.log(name);
    
// }
//  console.log(myName());
 
// let number = 23
// let string = "name"
// let boolean = true
// let undefine = undefined



// console.log(number,string,boolean,undefine);

// const x = Symbol();
// const y = Symbol();

// console.log(x,y);
// let day = new Date()
// day = day.getDay()
// switch (day) {
//     case 0:
//         console.log("today is sunday");
//         break;
//     case 1:
//         console.log("today is monday");
//         break;
//     case 2:
//         console.log("Today is tuesday");
//         break;

//     default:
//         break;
// }
// let i =0
// while (i<=100) {
// console.log(i);
// i++
    
// }
// let i =0
// do{
   
//     console.log(i);
//     i++
//     if(i===3){
//         continue;
//     }
    
// } while(i<=10)


// (function () {
//     console.log("This runs immediately!");
// })();//iife

// var state;           // moved to the top
// console.log(state);   
// state = "ready"; 


// showState();            // output: Ready

// function showState() {
//   console.log("Ready");
// }

// var showState = function() {
//   console.log("Idle");
// };


// function showState() {     // moved to the top (function declaration)
//   console.log("Ready");
// } 

// var showState;            // moved to the top (variable declaration)

// showState();  

// showState = function() {   // left in place (variable assignment)
//   console.log("Idle");
// };


// let arr = [1,2,3,4,5,6]
// let arr2 =  [1,2,undefined,"string",true]
// console.log(arr);
// console.log(arr2);


// const arr = new Array(5)
// console.log(arr.length);


// const fruits = ["apple", "banana", "cherry"];

// // Accessing the first element
// let firstFruit = fruits[0]; // "apple"

// // Accessing the second element
// let secondFruit = fruits[1]; // "banana"

// // Accessing the last element using array.length
// let lastFruit = fruits[fruits.length - 1]; // "cherry"

// console.log(lastFruit);

// const colors = ["red", "green", "blue"];

// // Modifying the second element
// colors[1] = "yellow";

// console.log(colors); // Output: ["red", "yellow", "blue"]


// let fruits = ["apple", "banana"];
// fruits.push("orange", "grape");
// console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// let fruits = ["apple", "banana", "orange"];
// let removedFruit = fruits.pop();
// console.log(fruits); // Output: ["apple", "banana"]
// console.log(removedFruit); // Output: "orange"


// let fruits = ["apple", "banana", "orange"];
// let removedFruit = fruits.shift();
// console.log(fruits); // Output: ["banana", "orange"]
// console.log(removedFruit); // Output: "apple"



// let fruits = ["banana", "orange"];
// fruits.unshift("apple", "grape");
// console.log(fruits); // Output: ["apple", "grape", "banana", "orange"]

// let arr = [1,2,3,4,5,6]

// let newArr = arr.forEach((num)=>(num+2)) // this will be undefine

// let newArr = arr.map((num)=>(num+2))

// console.log(arr);
// console.log(newArr);

    // const numbers = [1, 2, 3, 4, 5];
    // const evenNumbers = numbers.filter(num => num % 2 === 0); 

    // console.log(numbers);
    // console.log(evenNumbers);
    

    // let arr = [1,2,3,4,5,6]

    // let reduceArr = arr.reduce((total,current)=>{ return total+current},5)

    // console.log(arr);
    // console.log(reduceArr);
    
    //     const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    // const foundUser = users.find(user => user.id === 2); // foundUser is { id: 2, name: 'Bob' }

    // console.log(foundUser);
    


    //     const numbers = [1, 3, 5, 7,2];
    // const hasEven = numbers.some(num => num % 2 === 0); // hasEven is false
    // console.log(hasEven);
    

    //     const numbers = [2, 4, 6, 8,3];// noe it will be false
    // const allEven = numbers.every(num => num % 2 === 0); // allEven is true

    // console.log(allEven);
    

    // const user = {
    //     name:"",
    //     age:23,
    //     section:""
    // }

    // let obj = new Object()
    // obj["name"]="Usama"
    // obj["age"]=23
    // console.log(obj);


//  console.log(Math.floor(Math.random()*10))

    // console.log(0/9);
    
    // const now = new Date()
    // setInterval(()=>{
    //      const now = new Date()
    //     console.log(now);
    // },1000)
    

    //     const d = new Date(); // Start with the current date/time

    // d.setFullYear(2026);    // Set the year
    // d.setMonth(0);          // Set the month to January (0)
    // d.setDate(1);           // Set the day of the month to 1
    // d.setHours(10);         // Set the hour to 10 AM
    // d.setMinutes(30);       // Set the minute to 30
    // d.setSeconds(15);       // Set the second to 15
    // d.setMilliseconds(500); // Set the millisecond to 500

    // console.log(d);

    
  // Get all elements with the class "myClass"
// const elements = document.getElementsByClassName('parent');

// // Loop through the collection and apply the style to each element
// for (let i = 0; i < elements.length; i++) {
//   elements[i].style.color = 'red'; // Change the text color to red
//   // You can set other style properties here as well, e.g., elements[i].style.backgroundColor = 'blue';
// }
    
// document.getElementById("apna").style.color = "red"


// let parent = document.querySelector(".parent");

// let div = document.createElement("h1")
// div.textContent = "Hello G!"

// parent.appendChild(div)
// parent.removeChild(div)

//parent.addEventListener("click",()=>alert("clicked!"))



// console.log(screen.width);

// confirm("are you a robot!")

// console.log(x);
// var x = 6;




// let obj = {
//   name:"myname",
//   age:23,
//   count:function call(){
//     console.log(name);
    
//   }
// }

// obj.count()

// let a = 3
// let c = 6

// console.log(a);
// console.log(c);


// // [a,c]=[c,a]
// [a,c] = [c,a]

// console.log(a)
// console.log(c)




// class car{
//   constructor(name,model){
//     this.name = name
//     this.model = model


//   }
//   showDetails(){
//     console.log(`the car is ${this.name} and the model is ${this.model}`);
    
//   }
// }

// const car1 = new car("Honda","2020")

// console.log(car1);
// car1.showDetails()

// class Person{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }

//   getDetail(){
//     console.log(`the person name is ${this.name} and age is ${this.age}`);
    
//   }
// }


// class Student extends Person{
//   constructor(Degree){
//     super(name)
    
//     this.Degree=Degree
//   }
//   getDetail(){
//     console.log(`the name is ${this.name} and he is in ${this.Degree}`);
    
//   }
// }

// let person = new Person("Usama", "23")

// let student = new Student("BSSE")

// console.log(person);
// console.log(student);




// async function callAPi(){

//   try {
//     let data = await fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1",{
//       method:"Get"
//     })
//     let res = await data.json()
//     console.log(res);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// callAPi()


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     // Code to handle the response
//   }
// };
// xhttp.open("GET", "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1", true);
// xhttp.send();

// console.log(xhttp);

// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }
 
// let obj = { //can't be used on object
//   name:"Student Name",
//   age:20,
//   section:"Student section",
//   university:"Student University"
// }

// // console.log(obj);

// for(const o of obj){
//   console.log(o);
  
// }


// let arr = [1,2,3,4,5,6,7,8]

// let name = "nnankaksnaknsas"

// for(let i of name){
//   console.log(i);
  
// }

// let name = new String()

// console.log(name);

// function* generate(){
//   yield "Hello";
//   yield " hi";
//   return "done"
// }

// const gen = generate()

// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());


// console.log(gen);

// console.log(generate());


// let days = new Map()

// days.set('1','friday')
// days.set("2",23)

// console.log(days);


/*  Method of Map inclide 
 get
 set
 delete
 clear*/

//  function outer() {
    
//     function inner() {
//         console.log("This is the inner function.")
//     }

//     inner();

//     console.log('This is the outer function')
// }
// outer();


// function addOut(a,b){
//   function addIn(c,d){
//     console.log(a+b+c+d);
    
//   }
//   addIn(1,2)
// }
// addOut(3,4)


// function greet(name) {
//     const hours = new Date().getHours();
//     const timeOfDay = hours < 12 ? "Good morning" : hours < 18 ? 
//         "Good afternoon" : "Good evening";
//     console.log(`${timeOfDay}, ${name}!`);
// }

// greet("Usama");


// function createCounter() {
//   let count = 0; // This variable becomes part of the closure's persistent state

//   return {
//     increment: function() {
//       count++;
//       return count;
//     },
//     decrement: function() {
//       count--;
//       return count;
//     },
//     getValue: function() {
//       return count;
//     }
//   };
// }

// const counter1 = createCounter();
// console.log(counter1.increment()); // Output: 1
// console.log(counter1.increment()); // Output: 2
// console.log(counter1.getValue());  // Output: 2

// const counter2 = createCounter(); // Creates a separate, independent state
// console.log(counter2.increment()); // Output: 1
// console.log(counter1.getValue());  // Output: 2 (counter1's state remains independent)




// let a = {
//   name:"name",
//   section:"section"
// }


// let data = Object.getPrototypeOf(a)
// console.log(data);

// let b = Object.create(a)

// console.log(a);
// console.log(b);



// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// }

// // Add a method to the Vehicle prototype
// Vehicle.prototype.honk = function() {
//   console.log("Beep beep!");
// };

// let myCar = new Vehicle("Toyota", "Camry");
// myCar.honk(); // Beep beep! (inherited from Vehicle.prototype)



// function showThis() {
//   console.log(this);
// }

// showThis(); // In a browser, logs the Window object; in Node.js, logs globalThis.
// // In strict mode, if called as a standalone function, logs undefined.


// console.log(this);


// console.log(this);
// console.log(this === window);
// window.firstName = "Badreddine";
// console.log(this.firstName);

// console.log(this === window); //true


// "use strict";
// function regularFunction() {
//     console.log(this);
// }

// regularFunction();// it will be undefine



// const infos = function (techOne, techTwo, techThre) {
//    console.log(
//       `Hi, my name is ${this.name}, I'm a ${this.job}, I use ${techOne}, ${techTwo} and ${techThre}`
//    );
// };

// const me = {
//    name: "Badreddine",
//    job: "Frontend Developer",
// };

// const technologies = ["React", "TypeScript", "Tailwind"];

// infos.call(me, technologies[0], technologies[1], technologies[2]);



