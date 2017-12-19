import Person from './person.js';

window.onload=function () {
    let person = new Person("Hannes","Schönböck");

    let div = document.getElementById("eventDiv");
    /*div.addEventListener("changeFirstName", function (e) {
       console.log("Received change first name event");
       div.innerHTML = "<p>Changed first name form " + e.detail.old +
           " to " + e.detail.new;
    });*/


    var htmlHandler = function(param){
        console.log("Received change first name event");
        console.log(this);
        $(this).append("<p>Changed first name form " + param.oldVal +
            " to " + param.newVal);
    }

    person.subscribe("changedFirstName",div,htmlHandler);
    person.subscribe("changedLastName",div,htmlHandler);

    person.subscribe("changedFirstName",person,Person.prototype.print);

    person.setFirstName("Johannes");
    person.setLastName("Schoenboeck");



}