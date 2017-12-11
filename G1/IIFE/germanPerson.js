/**
 * Created by p23460 on 15.09.2016.
 */

var lib =(function(lib) {
    function Person(fn, ln) {
        this.vorname = fn;
        this.nachname = ln;
    }

    Person.prototype.drucken = function () {
        console.log("Vorname: " + this.vorname);
        console.log("Nachname: " + this.nachname);
    }

    Person.prototype.getFirstName = function () {
        return this.vorname;
    }

    Person.prototype.getLastName = function () {
        return this.nachname;
    }

    Person.prototype.setFirstName= function (fn) {
        this.firstName = fn;
    }

    //return the whole object
    lib.GermanPerson = Person;
    return lib;
})(lib ||{})
//=================================================




