/**
 * Created by p23460 on 15.09.2016.
 */

//var lib =(function(lib) {
    function Person(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }

    Person.prototype.print = function () {
        console.log("First name: " + this.firstName);
        console.log("Last name: " + this.lastName);
    }

    Person.prototype.getFirstName = function () {
        return this.firstName;
    }

    Person.prototype.getLastName = function () {
        return this.lastName;
    }

    Person.prototype.setFirstName= function (fn) {
        this.firstName = fn;
    }

    //return the whole object
  //  lib.Person = Person;
  //  return lib;
//})(lib ||{})
//=================================================




