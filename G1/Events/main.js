import Person from './person.js';

window.onload = function () {
    let person = new Person("Hannes","Schönböck");

    //DOM Variante
     let div = document.getElementById("eventDiv");

    div.addEventListener("changeFirstName", cb);

    function cb(e){
        console.log("received change first name event");
        div.innerHTML = "<p>Changed first name from " + e.detail.old +
            " to " + e.detail.new + "</p>";
        div.removeEventListener("changeFirstName",cb);
    }



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

    person.setFirstName("Johannes");
    person.setFirstName("dfgkdsflöjgfldkg");
}