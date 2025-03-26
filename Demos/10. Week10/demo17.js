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


    // Constructor function [CTOR] 
    // you are define CTOR once, and then we can create multiple instances or objects
    // CTOR function - Named function, Anonynous function or arrow function
    // pseudo- class

    // creating objects through constructor

    var instructor = function (name, id, ImagePath)
    {
        this.instructorName = name;
        this.instructorId = id; 

        // creating an image object inside Instructor object
        this.instructorImage = new Image();

        this.instructorImage.src = ImagePath;

        
    }
    // instructor is an object type and you can create instances of it

    // To add functions into object, use constructor prototype
    instructor.prototype.changeName = function (name)
    {
        // perform some validation checks on value coming from client side
        this.instructorName = name;
        // this will refer to current object
    } 

    let instructor1 = new instructor("Simran", "1004758", "simran.jpg");
    let instructor2 = new instructor("Shane", "1004759");
    let instructor3 = new instructor("Shane1", "1004759");
    let instructor4 = new instructor("Shane2", "1004759");
    let instructor5 = new instructor("Shane3", "1004759");
    let instructor6 = new instructor("Shane4", "1004759");
    let instructor7 = new instructor("Shane5", "1004759");
    let instructor8 = new instructor("Shane6", "1004759");
    let instructor9 = new instructor("Shane7", "1004759");
    let instructor10 = new instructor("Shane8", "1004759");
    let instructor11 = new instructor("Shane9", "1004759");


    console.log(instructor1.instructorName);

    instructor1.changeName ("Harsimranjot");

    console.log("After name Change "+ instructor1.instructorName);
    //instructor1.instructorImage.src

    let instructorList = new Array(); // Empty array
    //let instructorList = new Array(10);
    // will create an empty array of 10 elements

    console.log(instructorList.length);

    //push function to add new element to the end of array
    instructorList.push(instructor1);
    instructorList.push(instructor2);
    instructorList.push(instructor3);
    instructorList.push(instructor4);
    instructorList.push(instructor5);
    instructorList.push(instructor6);
    instructorList.push(instructor7);
    instructorList.push(instructor8);
    instructorList.push(instructor9);
    instructorList.push(instructor10);
    instructorList.push(instructor11);


    // To remove element from an array
    // pop() - it will always remove the last element, and reduce the length as well 

    // delete(n) - it will delete element at index postion n 

    for(i=instructorList.length-1; i > 0; --i)
    {
        console.log(instructorList[i].instructorName);
    }

}
