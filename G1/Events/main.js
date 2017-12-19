import Person from './person.js';

window.onload = function () {
    let person = new Person("Hannes","Schönböck");

    //DOM Variante
   /*  let div = document.getElementById("eventDiv");

    div.addEventListener("changeFirstName", cb);

    function cb(e){
        console.log("received change first name event");
        div.innerHTML = "<p>Changed first name from " + e.detail.old +
            " to " + e.detail.new + "</p>";
        div.removeEventListener("changeFirstName",cb);
    }*/


   /* //jQuery Variante
    $("#eventDiv").on("changeFirstName",function(e,oldVal,newVal){
        console.log("received change first name event");
        this.innerHTML = "<p>Changed first name from " + oldVal +
            " to " + newVal + "</p>";
        //$("#eventDiv").off("changeFirstName");
    })


    $(person).on("changeFirstName",function(e,oldVal,newVal){
        console.log("received change first name event");
    });*/

    let htmlHander = function (param){
        console.log("received change first name event");
        this.innerHTML = "<p>Changed first name from " + param.oldVal +
            " to " + param.newVal + "</p>";
    }

    let div = document.getElementById("eventDiv");
    person.subscribe("changedFirstName",div,htmlHander);
    person.subscribe("changedLastName",div,htmlHander);

    person.subscribe("changeFirstName",person,Person.prototype.print);

    person.setFirstName("Johannes");
    //person.setFirstName("dfgkdsflöjgfldkg");
    person.setLastName("Schoenboeck");
}