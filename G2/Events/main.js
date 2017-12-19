import Person from './person.js';

window.onload=function () {
    let person = new Person("Hannes","Schönböck");

    let div = document.getElementById("eventDiv");
    /*div.addEventListener("changeFirstName", function (e) {
       console.log("Received change first name event");
       div.innerHTML = "<p>Changed first name form " + e.detail.old +
           " to " + e.detail.new;
    });*/


    var htmlHandler = function(oldVal, newVal){
        console.log("Received change first name event");
        console.log(this);
        $(this).append("<p>Changed first name form " + oldVal +
            " to " + newVal);
    }

    person.subscribe(div,htmlHandler);

    person.setFirstName("Johannes");

    //person.addEventListener("changeFirstName", function(){})

}