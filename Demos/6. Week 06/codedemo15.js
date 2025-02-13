// Demo 15 js file

console.log("First message from js file");

/*
Bind events to event listeners 
1. Identify the element from JS
    // js functions
    document
    getElementById(id)
    getElementByTagName(tagName)
    getElementByClassName(className)
    getElementByName(name)

2. Bind the element to its event listener

*/

window.onload = function()
{
    console.log("On page load");    

    //bind the element with id fisrtButton to event 
    document.getElementById("fisrtButton").onclick= changeText; //Don't include () here

    // bind the element with id 'secondButton' to on click event
    document.getElementById("secondButton").onclick = DynamicChange;

}

function DynamicChange()
{
    console.log("Inside Dynamic change function");

    //let paragraphText = "<p> This is my dynamic paragraph </p>";
    
    let table = "<table>";
            table += "<tr>";
                table += "<th> Student Name </th>";
                table += "<th> Email";
            table += "</tr>";
            table += "<tr>";
                table += "<td> Harsimran </th>";
                table += "<td> harsimran@nait.ca";
            table += "</tr>";
    table += "</table>";

    //Now we have para created- lets add it to dynamic container before snow starts
    let divElement = document.getElementById('dynamicPart');
    // Using innerHTML you can add it there
    divElement.innerHTML = table;
    
}

function changeText()
{
    console.log("Inside changeText function");

    paraText = prompt("Enter new text paragraph", "Text");
    //Putting an entry into console log for varification
    console.log(paraText);
    // checking that value should not be a null value
    if(paraText!=null && paraText.length > 0)
    { // if is not null use that text to replace the value
        // Change it to any other text
        // innerHTML will change the HTML value of any element
        document.getElementById("para1").innerHTML += paraText;

        // Shortcut way 

        document.getElementById("para1").innerHTML = document.getElementById("para1").innerHTML + " " + paraText;
    }
    else
    {
        alert("Not a valid action. Provide right text and press ok");
    }
}