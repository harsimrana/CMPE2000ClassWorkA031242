// .js is extension of javasctip file

function secondFunction()
{
    console.log("Inside second function");
    document.body.style.backgroundColor="lightgreen";
    alert("Color has been changed");
}

/************************************************************
 * Function Name    : redirectToNait
 * Purpose          : To redirect the user to NAIT Website
 * Inputs           : No 
 * Output           : NO
 ************************************************************/
function redirectToNait()
{
    console.log("Inside redirectToNait function");
    window.location="https://www.nait.ca/nait/home";
    // Location property - redirect the user to any other URL
    // window keyword is optional because that is the default value
}

/************************************************************
 * Function Name    : obtainDimensions
 * Purpose          : To get dimensions of any window
 * Inputs           : No 
 * Output           : NO
 ************************************************************/
function obtainDimensions()
{
    width = window.innerWidth;
    height = window.innerHeight;

    if(width > 800 )
    {
        alert("Width of the window = " + width +" Height = " +height );
    }
    else
    {
        alert("Height Only = "+ height);
    }

}

/************************************************************
 * Function Name    : inputAge
 * Purpose          : To get value from user 
 * Inputs           : No 
 * Output           : NO
 ************************************************************/
function inputAge()
{
    //           Prompt message   ,Default value
    age = prompt("Enter your age", "0");
    // It will return age value 
    // If ok button is clicked, it will return value entered
    // IF cancel button is clicked, it will return null
    console.log(age);
    // isNan- Is not a number - true or false - if it is a number
    if(!isNaN(age))
    {
        alert("Valid value");
    }
    else
    {
        alert("Please provide a valid number");
    }

    
}
