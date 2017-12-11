export default class Person {
    constructor (firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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
            {'detail':{'old':oldName,'new': newFirstName}});
        document.getElementById("eventDiv").dispatchEvent(event);

        //jQuery
        //$("#eventDiv").trigger("changeFirstName",[oldName,newFirstName]);


    }
}