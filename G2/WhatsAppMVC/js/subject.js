export default class Subject {

    constructor(){
        //assoziativer Array mit Array
        this.observers = [];
    }

    subscribe(eventName,observer,callbackFct){
        if(this.observers[eventName]==undefined){
            this.observers[eventName]=[];
        }
        this.observers[eventName].push({
            obj:observer,
            fct:callbackFct
        });
    }

    unsubscribe(eventName,observer){
        if(this.observers[eventName]!=undefined){
            let observersForEvent = this.observers[eventName];
            for(let i=0; i<observersForEvent.length;i++){
                if(observersForEvent[i].obj == observer){
                    observersForEvent.splice(i,1);
                    break;
                }
            }
        }
    }

    notifyObservers(eventName,param){
        let observersForEvent = this.observers[eventName];
        for(let observer of observersForEvent){
            observer.fct.call(observer.obj,param);
        }
    }
}