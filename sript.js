
//         Assignment # 2 (Vanilajs)

// We need to calculate how many Km or Miles the user traveled.
// Part # 1:

let totalDistance=()=>{


const trips = [
    { to: 'Brazil', distance: 1000 },
    { to: 'Chine', distance: 2500 },
    { to: 'India', distance: 3000 }
]
console.log(`${trips[0].distance}`)
trips.forEach((value,index)=>{
  
let co = confirm(`are you go by defalut ${trips[index].to} distance which is ${trips[index].distance}`)
if (co == 0) {
     trips[index].distance = +prompt(`Enter ${trips[index]} distance`)
}

})
let calculation=()=>{
let finalResult=trips.reduce((h1, h2) =>

h1 + h2.distance,0

 )
return finalResult
}
let miles=calculation()*0.621371;
let showResult=document.getElementById("getOutput")
showResult.innerHTML+=`<p>total distance is in km is ${calculation()}</p>`
showResult.innerHTML+=`<p>total distance is in km is ${miles}</p>`
console.log(calculation())
}

//     Part # 2:
// We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.


let computersCount=()=>{


const computers = [
{type:'Laptop',price:124, os:'Windows'},
{type:'Desk',price:124, os:'Mac'},
{type:'Desk',price:124, os:'Windows'},
{type:'Laptop',price:124, os:'Mac'},
{type:'Laptop',price:124, os:'Windows'},
];
let calculation=()=>{

let finalResult=computers.reduce((h1, h2) =>{

if(h2.os=='Windows'){
  h1.Windows ++

}
else  if(h2.os=='Mac'){
  h1.Mac ++
 

}

return h1;},{
    Windows:0,Mac:0
   
}
)

return finalResult

}
console.log(calculation())
let count=document.getElementById("comCount")
count.innerHTML+=`<p>Number of mac computer ${calculation().Mac}</p>`
count.innerHTML+=`<p>Number of window computer ${calculation().Windows}</p>`
}
// We have div, and if the user clicks on it, will get a cupcake with an amount to pay and the order number.Refactor the code to meet ES6 standards.

// Part # 3:

// Which of these variables would you change to let or const ?

const name = "James";
const employeeId = 25;
let eyes = "Blue";
let age = 25
let position = "Developer";
let salary = 2500;
const knowdlege = ['Javascript','PHP','REACT','Angular 4'];
let married = false;

// PS: Just Refactor the code as per your variables scope understanding or nothing else, dont be use chatgpt or google plz try to itself.



var cupcake = document.querySelector('.cupcake');
var container = document.querySelector('.orders')

var cupcakes = [
{id:1,flavor:'Strawberry'},
{id:2,flavor:'Apple'},
{id:3,flavor:'Banana'}
]

var randomCupcake;
var orderNumber = 0;
var baseAmount = 5;
var finalAmount;
var dicountID = 2;
var dicountAmount = 3;
var message

cupcake.addEventListener("click",function(){
// Select a random cupcake
randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

// Increment the order number, we get a different order with each cupcake.
orderNumber += 1;

// Depending on the "dicountID" variable, this cupcake is on sale or not.
finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;

// Create the message
message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
container.insertAdjacentHTML('beforeend',message)

});




