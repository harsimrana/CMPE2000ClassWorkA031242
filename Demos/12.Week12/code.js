/*
    jQuery - Free Open Source JavaScript Library - Functions

    A lot of selectors, methods
    Cross browser compatibility 

    A compressed library so it load quickly

    2. Ways to include jQuery 
    1. Download library and include it inside your folder
    2. Link it directly to online CDN Content Delivery Network


*/

// JavaScript Version
/*window.onload = ()=>{
    console.log("On page load");
}
*/

//jQuery Version
$( ()=>{
    console.log("On Page load from jQuery");

    //document.querySelector("p")

    

    // Bind a click event on b1 button
    $("#b1").click( ()=>{
        console.log(" b1 clicked");
        //$("p").hide(1000); // milliseconds 1 second

        //$("p").show(1000); // milliseconds
        //$("p").toggle(1000); // Display or hide the selected the element

        //$("p").slideUp(1000);
        //$("p").slideDown(1000);
        //$("p").slideToggle(1000);

        //$("p").fadeOut(1000);
        //$("p").fadeIn(1000);
        //$("p").fadeToggle(1000);

        let OldText = $("p").html( ); // Getter function

        console.log(OldText);
        if(OldText.length < 4) 
        {
            alert("Length is less than 4");         
        }
        else{
            $("p").html("Hello New Text");  // setter function with argument
        // text() or html() - innerHTML
        }
        // Apply css directly 
       // $("p").css("color", "green");
        //$("p").css("background-color", "Black");

        $("p").addClass("newClassBack newClassColor");
        // removeClass, hasClass

        $("h1").css("color", "red");

        let h1Color = $("h1").css("color"); // getter function
        console.log(h1Color);

        
    });


    //bind the click event on button with id b2
    $("#b2").click( FormData);



});

function FormData()
{
    console.log("Inside Form Data funciton");
    let userName = $("#Name").val(); // With form elements val() fucntion is important
    
    console.log(userName);
    if(userName.length ==0)
    {
        alert("Emplty field");
        $("#Name").focus(); // set focus on any specific element
    }
    else{
        // Submit your form 
        // Make sure to select your form instead of your button
        //$("[name=myForm]").submit();
    }
    // Convert JavaScript objects into jQuery objects
    $(this) .css("color", "red");

    let ElementList = $("input"); // all elements matched
    console.log(ElementList);

    // foreach in JavaScript 
    // each() in jQuery 
    ElementList.each( (index, item)=>{
        $(item).css("background-color","green");
    } );

}

