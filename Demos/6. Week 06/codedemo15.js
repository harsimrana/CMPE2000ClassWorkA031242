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
}

function changeText()
{
    console.log("Inside changeText function");

    let paraText = prompt("Enter new text paragraph", "Text");
    //Putting an entry into console log for varification
    console.log(paraText);
    // checking that value should not be a null value
    if(paraText!=null && paraText.length > 0)
    { // if is not null use that text to replace the value
        // Change it to any other text
        // innerHTML will change the HTML value of any element
        document.getElementById("para1").innerHTML = paraText;
    }
    else
    {
        alert("Not a valid action. Provide right text and press ok");
    }
}