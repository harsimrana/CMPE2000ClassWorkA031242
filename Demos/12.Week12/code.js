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

    //Bind the click event on button with id b3
    $("#b3").click(()=>{
        console.log("b3 clicked");
        $("img").fadeOut(1000); // NOT Ashnchronous 

        $("img").prop("src","GoogleLogo.png").fadeIn(500);
    });

  //Bind the click event on button with id b4
  $("#b4").click(()=>{
    console.log("b4 clicked");

    //              Duration, callback 
    $("img").fadeOut(1000, ()=>{  // After completion of first operation [fadeOut], it will call callback function
        $("img").prop("src","GoogleLogo.png").fadeIn(500, ()=>{
                // Thir event
                $("img").fadeTo(1000, 0.1); //50% blur
                // parent() - will access parent of current element
                $("img").parent().css("border", "2px solid blue");

                // Try to append a child under a container

                let element = "<p> Child p element </p>";

                // adding an element into a a parent container
                $("#container").append(element);
        });
    });

    
})

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

