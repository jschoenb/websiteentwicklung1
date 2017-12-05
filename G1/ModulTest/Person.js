let internal = Symbol();

export default class Person {
    constructor (firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print(){
        console.log(this.firstName);
        console.log(this.lastName);
        this[internal]();
    }

    [internal](){
        console.log("top secret");
    }
}