
let topSecretPrivate = Symbol();

export default class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print(){
        console.log(this.firstName);
        console.log(this.lastName);
        this[topSecretPrivate]();
    }

    [topSecretPrivate](){
        console.log("Nur für internen Gebrauch");
    }
}