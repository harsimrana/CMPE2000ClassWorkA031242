let url= "https://thor.cnt.sast.ca/~aulakhha/1241/CMPE2000A01/serverfiles/main.php";

$( ()=>{
    console.log(" On Page load");
    // AJAX- Asynchronous Javascript and XML [Extensible Markup Language] - file  format for storing, transimitting ans reconstructing data
    // JSON: Javascript Object Notaion

    // $.ajax() 
    /*
        1. type - Method of submission - GET [Default], POST , PUT, DELETE
        2. Server URL
        3. Client Data 
        4. DataType - type of response server : HTML, JSON, XML
        5. Call back funcion: Success, Error, Before making call, When request completes but before calling success function

    */
    // bind your buttons
    $("#b1").click(()=>{
        console.log("b1 clicked");

        // Make ajax call
        MakeAjaxCall(url, {}, "GET", "HTML", successB1, errorHandler);
    });

    // bind your buttons
    $("#b2").click(()=>{
        console.log("b1 clicked");
        let data= {};

        data['name']= "Simran";
        data['action']= "b2";

        console.log(data);

        // Make ajax call
        MakeAjaxCall(url, data, "GET", "HTML", successB1, errorHandler);
    });


})

// Success handler for b1 Ajax call
function successB1(serverData, serverStatus)
{
    console.log(serverData);
    console.log(serverStatus);

    // Show information on page
    $("#serverResponse").html(serverData);
    $("#serverResponse").css("color","green");

}

function errorHandler(ajaxreq, errorCode, errrorThrown)
{
    console.log(errorCode);
    console.log(errrorThrown);
     // Show information on page
     $("#serverResponse").html(errrorThrown);
     $("#serverResponse").css("color","red");

}
// Generic function to handle AJAX calls
function MakeAjaxCall(serverURL, clientData, reqMethod, resDataType, fxnSuccess, fxnError)
{
    console.log("Insdie Ajax call function");
    let ajaxOptions = {};
    ajaxOptions['url']      =   serverURL;      // Destination URL
    ajaxOptions['data']     =   clientData;     // Client Data to be sent to server
    ajaxOptions['type']     =   reqMethod;      // GET/POST request method
    ajaxOptions['dataType'] =   resDataType;    // HTML/ JSON 
    ajaxOptions['success']  =   fxnSuccess;     // Callback function for successful case
    ajaxOptions['error']    =   fxnError;       // Callback function for error case

    console.log(ajaxOptions);

    // Make Ajax call and pass ajaxOptions object
    $.ajax(ajaxOptions);

}