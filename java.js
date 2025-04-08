// define needed functions 

// a function that creates an HTML element
function createEl(elType){
    const element = document.createElement(elType)
    return element
};

// a function that appends an element to another
// use this to append child divs in the grid to the container
// inputs child and parent elements
function appendChildElement(child,parent){
    parent.appendChild(child)
};



// a function (attachAttribute) that creates attributes to elements
function attachAttribute(element,type,attribute){
    element.setAttribute(type, attribute);
};


// a function that asks for user input
function askUser(){
    let userInput = prompt("How many squares do you want on your grid?");
    return userInput
};

// a function that checks user input and only return numeric values 
// need to be greater than 0 as well
function checkInput(input){
    if (isNaN(input)){
        return false;
    } else if(isNaN(input) <= 0){
        return false
    } else {
        return true
    }
};

// define variables
const container = document.querySelector("#container")

// define maxgridsize
let maxGridsize = 100;
let gridSize = 0;

// only use this variable temporarily to check code without user inputs
//let tempUserInput = 16;
let userInput = 4;

// add button to adjust grid numbers
const button = createEl("button");
button.style.fontSize = "16px";
button.style.backgroundColor = "whitesmoke";
button.style.paddingg = "16px";
button.addEventListener("click", () => {
    userInput = +prompt("how many squares do you want your grid to be?")
    console.log(userInput);
    clearGrid();
    // check which grid size to use, not greater than maxgridsize
    if (userInput > maxGridsize){
        userInput = maxGridsize;
    } 
    createGrid(userInput);
});

// append button on top of body
button.textContent = "Press me to adjust grid size";
const body = document.querySelector("body")
body.insertBefore(button,body.firstChild);

//Logic



// square input loop for square formation
//gridSize = tempUserInput**2;

function createGrid(userInput){
    for (let i=0; i < userInput; i++){
        // create row container elememts using createEL function
        let divContainer = createEl("div");
        appendChildElement(divContainer,container);
        attachAttribute(divContainer, "class","secondContainer");
    
        // loop through for each row to create grid elements
        for (j=0; j< userInput; j++){
            let div = createEl("div");
            appendChildElement(div,divContainer);
            attachAttribute(div, "class","square");
        };
    };
    // Listen for Hover effect
    const squares = document.querySelectorAll(".square");
    // we use the .forEach method to iterate through each button
    squares.forEach((square) => {
    
        // and for each one we add a listener
        square.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            square.style.backgroundColor = `rgb(${r},${g},${b})`;
            let op = square.style.opacity;
            if (+op < 1){
                square.style.opacity = (+op+0.1);
            };
            
        });
    });
};

function clearGrid(){
    container.innerHTML = "";
};

//beginning with this size of grid
createGrid(4);

