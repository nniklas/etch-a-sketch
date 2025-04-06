const container = document.querySelector("#container")


// define needed functions 

// a function that creates an HTML element
function createEl(element){
    const element = document.createElement(element)
    return element
};

// a function that appends an element to another
// use this to append child divs in the grid to the container
// inputs child and parent elements
function appendChildElement(child,parent){
    parent.appendChildElement(child)
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


//Logic

// define maxgridsize
let maxgridsize = 100;

// only use this variable temporarily to check code without user inputs
let tempUserInput = 5;

// check which grid size to use, not greater than maxgridsize
if (tempUserInput > maxgridsize){
    tempUserInput = maxgridsize;
} 

// create needed elememts using createEL function

// use attacheAttribute to make divs in grid attain classes from stylesheet

// use attacheAttribute to make button attain desired attributes

// ask for user input on new grid size

// if invalid input ask again

// if valid remove current grid (if any)

// create new grid 

