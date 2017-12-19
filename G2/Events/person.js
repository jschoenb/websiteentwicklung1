export default class Person {
    constructor(fn,ln){
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

        //JS
        let event = new CustomEvent("changeFirstName",
            {"detail":{"old":oldName,"new":newFirstName}});
        //feuern des Events
        document.getElementById("eventDiv").dispatchEvent(event);
    }
}