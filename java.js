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
function attachAttribute(element, attribute){
    element.setAttribute(attribute);
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
let tempUserInput = 5;

//Logic

// check which grid size to use, not greater than maxgridsize
if (tempUserInput > maxGridsize){
    tempUserInput = maxGridsize;
} 

// create needed elememts using createEL function
// square input loop for square formation
gridSize = tempUserInput**2;
for (let i=0; i < gridSize; i++){
    let div = createEl("div");
    div.textContent = `I am div ${i+1}`;
    appendChildElement(div,container);
};

// use attacheAttribute to make divs in grid attain classes from stylesheet

// use attacheAttribute to make button attain desired attributes

// ask for user input on new grid size

// if invalid input ask again

// if valid remove current grid (if any)

// create new grid 

