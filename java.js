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
let tempUserInput = 16;

//Logic

// check which grid size to use, not greater than maxgridsize
if (tempUserInput > maxGridsize){
    tempUserInput = maxGridsize;
} 

// square input loop for square formation
//gridSize = tempUserInput**2;
for (let i=0; i < tempUserInput; i++){
    // create row container elememts using createEL function
    let divContainer = createEl("div");
    appendChildElement(divContainer,container);
    attachAttribute(divContainer, "class","secondContainer");

    // loop through for each row to create grid elements
    for (j=0; j< tempUserInput; j++){
        let div = createEl("div");
        appendChildElement(div,divContainer);
        attachAttribute(div, "class","square");
    };
};



// use attacheAttribute to make button attain desired attributes

// ask for user input on new grid size

// if invalid input ask again

// if valid remove current grid (if any)

// create new grid 

