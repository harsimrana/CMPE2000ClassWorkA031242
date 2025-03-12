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


    document.querySelector("[name=LoginForm]").onsubmit= Validate;
    
    let radioButtonList = document.querySelectorAll("[name=category]");
    
    // Assiging onclick event for each radio button
    // REGULAR way of doing it
    /*
    for(i=0; radioButtonList.length; ++i)
    {
        radioButtonList[i].onclick = RadioSelected;
    }
    */

    // Alternative Shortcut way using foreach
                        //   item  , index
    /*
    radioButtonList.forEach((item, index)=>{
        item.onclick = RadioSelected;
    } );
     */
    // More compact version 
    radioButtonList.forEach((item, index)=>{
        item.onclick = function(){
            console.log("Radio button function");
            console.log(this.value);
        };
    } );

    document.querySelector("#rdoSelected").onclick= CategorySelected;

    document.querySelector("#instructorList").onchange = ShowSelectedInstructor;

    document.querySelector("#instructorList").selectedIndex = 2;  // Select a value in drop down by default
}

function ShowSelectedInstructor()
{
    console.log("Inside Show Selected Inst function");
    console.log(this.value);
    // Add a new image here in the div container with id NewImage

    //Step 1. Create an image and set all attribute
    let image = new Image();

    image.setAttribute("src", "NaitLogo.png");
    image.setAttribute("alt", "Nait Logo");
    image.setAttribute("title", "Nait Logo");  // tooltip - when you hover over it using mouse
    // Grab CSS properties from Drop down list

    let dropdownList = document.querySelector("#instructorList");
                    // get style information for passed element - dropdown list
    let listStyle = window.getComputedStyle( dropdownList);

    console.log(listStyle.height);
    let listHeight =  listStyle.getPropertyValue("height");
    let listColor =  listStyle.getPropertyValue("color");

    console.log("list height : "+listHeight);
    console.log("list color : "+listColor);
    // Assign CSS properties which you want to change

    // apply on image
    image.setAttribute("height", listHeight);

    // Not working because was trying to change the color image itself
    //document.querySelector("#NewImage").setAttribute("style", "background-color:"+listColor+";");

    document.querySelector("#NewImage").style.setProperty("background-color", listColor);

    // Step 2: Add it to div container
    document.querySelector("#NewImage").appendChild(image);



}

function CategorySelected()
{
    console.log("Inside Category selected function");
    let category = document.querySelector("[name=category]:checked");

    console.log(category.value);
    //Alternative way
    let categories = document.querySelectorAll("[name=category]");

    for(i=0; i<categories.length; ++i)
    {
        if(categories[i].checked)
        {
            console.log("Selected category = " + categories[i].value);
        }
    }

    //select any specific radio button
    categories[2].checked= true;

    // Unselected radio buttons
    let category1 = document.querySelectorAll("[name=category]:not(:checked) ");

    //console.log(category.value);
}


function RadioSelected()
{
    console.log("Radio button function");
    console.log(this.value);
}
function Validate()
{
    console.log("Form submission");
    // Validate your form field here

    alert("Do you like to proceed?");
    let username = document.querySelector("[name=username]").value; 
    
    console.log(username);

    if(username == "" || username.length !=6)
    {
        alert("Username is empty or it should be 6 chacters only");
        //let button = document.querySelector("[type=submit]");
        //console.log(button);
       // button.setAttribute("disable",true);
        return false; // Avoid form submission by returning false
    }

    alert("All good ready to submit form");
    return true; // Allowing the form submission by returning true
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