// Global variables 

let elem="";  // storing new node as global variable

let timer ="";  // To track timer

window.onload = ()=>{
    console.log("On Load");

    document.querySelector("#cabtn").onclick= CreateNAppendNode;

    // Anonymous Function - Function without name: suitable candidates for event listeners
    document.querySelector("#rembtn").onclick = function (){
        console.log("Inside remove button click listener");

        let container = document.querySelector("#s1");

        let child = document.querySelector("#myParagraph");

        if(child!=null) // if present. only then remove it
        {
            container.removeChild(child); //Remove specific child from parent 
        }
        
        // Just to answer a question- How can we remove text inside any element
        //document.querySelector("#s1").innerHTML=""; // innerHTML property will help you
            
    }
    // Arrow function is another version for event listener
    document.querySelector("#movebtn").onclick= ()=>{
        
        console.log("Inside move element listener");
        let cellNumber = Math.floor( (Math.random() * 6) +1 );  // Generate a random number between 0 and 1 (1 is not included)
        
        console.log(cellNumber);
        console.log(elem);
        document.querySelector("#s"+cellNumber).appendChild(elem); // Move element to new grid cell;

    }

    // Assigning click event 
    document.querySelector("#moveEleTimer").onclick = MoveTextOnTimer;
    document.querySelector("#clrTimer").onclick= StopElement;

}


function StopElement()
{
    console.log("inside The stop element funciton ");
    // Trying to clear timer with the help of global variable
    clearInterval(timer);
} 

function MoveTextOnTimer()
{
    console.log("Inside moveText on Timer function");
                        // Function , timedelay
    timer = setInterval(MoveTextNode, 1000 );  // Millisenconds 
}

function MoveTextNode()
{
    console.log("Inside move element listener");
        let cellNumber = Math.floor( (Math.random() * 6) +1 );  // Generate a random number between 0 and 1 (1 is not included)
        
        console.log(cellNumber);
        console.log(elem);
        document.querySelector("#s"+cellNumber).appendChild(elem); // Move element to new grid cell;
}

function CreateNAppendNode()
{
    console.log("Inside Create And Append Node function");
    
    elem = document.createElement("p"); // P element is created
    elem.setAttribute("id", "myParagraph"); // setting id for P element
    
                        // property   value
    //elem.style.setProperty("color", "blue"); // setting text color

    // Another way of adding css
    //elem.style = "color:blue";  // make sure to follow CSS pattern here 

    //Another way of adding css
    //elem.setAttribute("style", "color:blue");


    //One more way to add CSS
    elem.style.color = "blue";
    elem.style.backgroundColor = "lightgreen";
    elem.style.fontSize = "20px";

    //It is possible to add classes which are already defined in CSS

    elem.setAttribute("class", "newClass");  // Add class to any element from JS 
    
    document.querySelector("h1").setAttribute("class", "newClass");

    var newTextNode = document.createTextNode("This is text Piece"); // creating a text node

    elem.appendChild(newTextNode); // Appending the text to the p 
    var section1 = document.querySelector("#s1");

    section1.appendChild(elem);// Adding p to grid cell
}