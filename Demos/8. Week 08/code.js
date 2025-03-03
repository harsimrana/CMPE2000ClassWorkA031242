// Global variables 

let elem="";  // storing new node as global variable

let timer ="";  // To track timer

let nodeList;

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

    document.querySelector("#posElements").onclick = PositionElements;

    // Trying to store reference for each section in NodeList
    // querySelectorAll will retunr an array as reference to all matching element 
    
    nodeList = document.querySelectorAll("section"); 
    // querySelector will give you first refereence of matching elements

}

// Important for LAB 02
function PositionElements()
{
    console.log("Pos elements button has been clicked");
    console.log(nodeList);

    for(let i = 0; i < nodeList.length; i++)
    {
        let posStr = nodeList[i].getAttribute("position");
        console.log(posStr);
        let rowNo =  parseInt(posStr.substring(0,2));  // Substring 0 1
        let colNo =  parseInt(posStr.substring(2,4));  // Substring 2 3

        console.log("Row Number "+ rowNo);
                                    //      1/2
        nodeList[i].style.setProperty("grid-row", `${rowNo} / ${rowNo+1}` );
        nodeList[i].style.setProperty("grid-column", `${colNo} / ${colNo+1}` );
    }
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