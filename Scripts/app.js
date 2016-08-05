/* Main JavaScript file */
// global scope
/**
 * FileName : app.js
 * 
 * @author Joanne Jung
 * @date June 8, 2016
 * @version 1.0.2 : Updated app.js to work on all pages
 * 
 * Student ID : 300432364
 * website : http://joannejung-assign2-updated-miniportfolio.azurewebsites.net
 * @description This file is the  main JavaScript file for the miniportfolio updated version
 */

//IIFE - Immediately Invoked Functiona Expression
(function () {
    "use strict";

    //define an array of HTML elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    paragraphElements[3] = document.getElementById("paragraphFour");
    paragraphElements[4] = document.getElementById("paragraphFive");

    // define your paragraphs array(most common way)
    var paragraphs = [];

    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");

    if (sendButton) {
        // event listener - if there is a sendButton on the page, then show
        sendButton.addEventListener("click", sendButtonClick);
    }

    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    // create a reference to the firstName field
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var message = document.getElementById("message");

    // createa a reference to the form
    var contactForm = document.getElementById("contactForm");

if(contactForm){
    // event listener - if there is a contactForm on the page, then call function showSubmittedData
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form is submitted");
        showSubmittedData();
        contactForm.reset();

    });
}
    /**
      * This function shows the input from each form field on the console
      * 
      * @method showSubmittedDate
      * @return {void} 
      */
    function showSubmittedData() {
        console.log("=======================================================");
        console.log("First Name : " + firstName.value);
        console.log("Last Name : " + lastName.value);
        console.log("Email address : " + email.value);
        console.log("Contact Number : " + contactNumber.value);
        console.log("Message : " + message.value);
        console.log("=======================================================");

    }



    // data for my pages   
    //index
    paragraphs[0] = "<div class='indexFirstSentence'> Loves to meet new people, but kind of shy.</div> <br><div class='picture'> <img src=Assets/shyicon.png></div><br><br><br>";
    // proejct
    paragraphs[1] = "<br><div class='indexSecondSentence'>The first project is from last semester, COMP213 - Web Interface Design, <br> and it is the main homepage of my portfolio. <br>It contains all assignments and projects I did for last year, and also little about myself.<br><a href='http://studentweb.cencol.ca/hjung3/'>Portfolio - COMP213</a> </div>";
    paragraphs[3] = "<div class='indexSecondSentence'>The second project is a web registration form I developed for a Tennis club, Thornhill Park Tennis Club.<br> <a href='http://studentweb.cencol.ca/hjung3/assignment4/assignment_4.html'>Web Form - Thornhill Park Tennis Club.</a></div>"
    paragraphs[4] = "<div class='indexSecondSentence'>The third project of mine is a website for a realtor, Maria Guadagnolo, with some of her current listings.<br> <a href='http://studentweb.cencol.ca/hjung3/Project/homepage.html'>Homepage - Maria Guadagnolo</a></div>"
    //about me
    paragraphs[2] = "<div class='indexSecondSentence'> If you can't avoid it, Enjoy it! <br>Then you will be always happy </div>";



    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }

})();