window.onload = () =>
{
    console.log("Page Load");

    // Objects- js
    // objects have properties/attribute/data members and functions/methods
    // Create own objects
    // 1. By creating a object literal
    // 2. Constructor function and using prototype object

    // First Method
    let student = {
        // properties of object
        studentId   : 1,
        studentName : "Simran",
        changeValues: function (name)
        {
            // perform validation 
            // clean inputs

            this.studentName = name;
        }

    }

    // To access properties or attributes use (.) dot operator
    console.log(student);
            // Object.propertyName
    console.log(student.studentId);
    console.log(student.studentName);

    student.changeValues("Harsimranjot");

    console.log(student.studentName);
    // You can also change it directly because it is public
    student.studentName = "Simranjot";

    console.log(student.studentName);


    // To access all propeties of an object
    for( let key in student)
    {   // Trying to print all keys and values
        console.log(`${key}  :  ${student[key]} `);
                            // key is working as an index
    }

}
