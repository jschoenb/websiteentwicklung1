export default class Person {
    constructor(fn,ln){
        this.firstName = fn;
        this.lastName = ln;
        this.observers = [];
    }

    subscribe(observer,callbackFct){
        this.observers.push({
            obj:observer,
            fct:callbackFct
        });
    }

    unsubscribe(observer){
        for(let i=0; i<this.observers.length;i++){
            if(this.observers[i].obj == observer){
                this.observers.splice(i,1);
                break;
            }
        }
    }

    triggerEvent(oldVal,newVal){
        for(let observer of this.observers){
            observer.fct.call(observer.obj,oldVal,newVal);
        }
    }

    print(){
        console.log(this.firstName);
        console.log(this.lastName);
    }

    setFirstName(newFirstName){
        let oldName = this.firstName;
        this.firstName = newFirstName;

        this.triggerEvent(oldName,newFirstName);
    }
}