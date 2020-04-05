//Question 1
const myFunctionExpression = function() {
    console.log("Florinda Zeida");
};
myFunctionExpression();


//Question 2
const myButton = document.querySelector(".btn");

function myClikButton() {
    console.log("I was clicked");
};
myButton.addEventListener("click", myClikButton);


//Question 3

const myEvent = document.querySelector("#firstName");

function myEventFunction(intro) {
    console.log(intro.key);
};
myEvent.addEventListener("keydown", myEventFunction);


//Question 4
const taskMouseOver = document.querySelector('button');

function myHoverButtonOver() {
    taskMouseOver.classList.add("hover");
    console.dir(taskMouseOver);
};
taskMouseOver.addEventListener("mouseover", myHoverButtonOver);


//Question 5
const taskMouseRemove = document.querySelector(`[data-animal = "dog"]`);

function myHoverButtonRemove() {
    taskMouseRemove.classList.remove("hover");
    console.dir(taskMouseRemove);
};
taskMouseRemove.addEventListener("mouseout", myHoverButtonRemove);


//Question 6
const listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++)
    listItems[i].addEventListener("mouseover", function() {
        console.log(listItems[i].getAttribute("data-animal"))
    });


//Question 7
const animal = "cow";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    case "bird":
        console.log("Tweet");
        break;
    case "":
        console.log("Harrumph");
        break;
};

//Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

function name(middleName) {
    console.log(middleName);
};
sheep.forEach(name);


//Question 9
function myTime() {
    console.log("Hello");
    if (counter === 5) {
        clearInterval(myCounter);
    };
    counter++;
};
let counter = 0;
const myCounter = setInterval(myTime, 500);


//Question 10
const timeRun = document.querySelector("div.container");

function newTime() {
    timeRun.innerHTML = "Text updated"
};
setTimeout(newTime, 2000);