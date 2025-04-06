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
// return number that was entered or false if invalid input


//Logic

// define maxgridsize

// use attacheAttribute to make divs in grid attain classes from stylesheet

// use attacheAttribute to make button attain desired attributes

// ask for user input on new grid size

// if invalid input ask again

// if valid remove current grid (if any)

// create new grid 

