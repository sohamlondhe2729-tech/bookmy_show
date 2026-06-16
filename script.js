console.log("BookMyShow Clone Loaded");

let buttons = document.querySelectorAll(".btn-danger");

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("Booking Page Comming Soon!");

    });

});