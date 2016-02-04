"use strict";

// IIFE (Immediately Invoked Function Expression)
(function () {

    console.log("App Started...");

    // declared a named fucnction way
    function replaceFirstParagraph() {
        
        console.log("inside replaceFirstParagraph function");
        
        var firstParagraph;
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "My New Paragraph Data";
        
    }
    // call the replaceFirstParagraph function
    replaceFirstParagraph();
    

})();