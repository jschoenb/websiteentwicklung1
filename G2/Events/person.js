import Subject from "./subject.js";

export default class Person extends Subject{
    constructor(fn,ln){
        super();
        this.firstName = fn;
        this.lastName = ln;
    }

    print(){
        console.log(this.firstName);
        console.log(this.lastName);
    }

    setFirstName(newFirstName){
        let oldName = this.firstName;
        this.firstName = newFirstName;

        super.notifyObservers("changedFirstName",{"oldVal":oldName,
            "newVal":newFirstName});
    }

    setLastName(newLastName){
        let oldName = this.lastName;
        this.lastName = newLastName;

        super.notifyObservers("changedLastName",{"oldVal":oldName,
            "newVal":newLastName});
    }
}