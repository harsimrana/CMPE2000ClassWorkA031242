// Js
/*
 on click of changeColor, 
    Change the background color of alternative td elements
    or alternative row

on click of changeMiddleColumn
    change the background color of middle column

*/

window.onload = ()=>{
    console.log("Page load");
    document.querySelector("#changeColor").onclick= changeColor;
    document.querySelector("#changeMiddleColumn").onclick= MiddleColumnColor;
}

function MiddleColumnColor()
{
    console.log("inside middle column");
    let middleColumnCells = document.querySelectorAll("td:nth-child(even), th:nth-child(even)"); 

    console.log(middleColumnCells);
    middleColumnCells.forEach((item)=>{
        item.style.setProperty("background-color", "red");
    });

}
function changeColor()
{
    console.log("Inside change color");
/*
    let tdItems= document.querySelectorAll("tr");

    console.log(tdItems);

    for(i = 0 ; i < tdItems.length; ++i)
    {
        if(i % 2 ==0)
        {
            tdItems[i].style.backgroundColor = "blue";
        }
        
    }
*/

    let tdItems= document.querySelectorAll("tr:nth-child(odd)");
    
    tdItems.forEach((item, index)=>{
        item.style.backgroundColor= "blue";
    })
}

