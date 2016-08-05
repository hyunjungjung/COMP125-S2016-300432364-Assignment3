/* Main JavaScript file */
// global scope
/**
 * FileName : app.js
 * 
 * @author Joanne Jung
 * @date August 5, 2016
 * 
 * Student ID : 300432364
 * website : http://joannejung-assign2-updated-miniportfolio.azurewebsites.net
 * @description the main JavaScript file for the Assignment 3 - miniportfolio updated version
 */

//IIFE - Immediately Invoked Functiona Expression
(function () {
    "use strict";
    // define the paragraph object
    var xhrParagraphsContents;
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

    if (contactForm) {
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

    /* ==== Assignment 3 === */

 function readParagraphs() {
    // data loaded                everything is ok
    if ((xhrParagraphsContents.readyState === 4) && (xhrParagraphsContents.status === 200)) {

      var paragraphsContents = JSON.parse(xhrParagraphsContents.responseText);
      var contents = paragraphsContents.paragraphs;

      contents.forEach(function (pContents) {
        var index = pContents["id"];
        var contents = pContents["content"];
        console.log(index + " ==> " + pContents);
        if (paragraphElements [index]) {
          paragraphElements [index].innerHTML = contents;
        }
      }, this);

    }
 }



  function init() {

if  (!xhrParagraphsContents){
    xhrParagraphsContents = new XMLHttpRequest(); }// step 1 - create xhr object
    xhrParagraphsContents.abort();
    xhrParagraphsContents.open("get", "Scripts/paragraphs.json", true); // step 2 - open request
    xhrParagraphsContents.send(); // step 3 - send request
    //xhrParagraphsContents.addEventListener("readystatechange", readParagraphs); // step 4
    xhrParagraphsContents.onreadystatechange=readParagraphs;
  }


window.addEventListener("load", init,false);

})();