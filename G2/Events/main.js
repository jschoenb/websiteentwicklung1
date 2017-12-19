import Person from './person.js';

window.onload=function () {
    let person = new Person("Hannes","Schönböck");

    let div = document.getElementById("eventDiv");
    div.addEventListener("changeFirstName", function (e) {
       console.log("Received change first name event");
       div.innerHTML = "<p>Changed first name form " + e.detail.old +
           " to " + e.detail.new;
    });

    person.setFirstName("Johannes");
}