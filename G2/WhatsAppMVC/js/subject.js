export default class Subject {
    constructor(){
        //assoziativer Array mit Array
        this.obversers = []
    }

    subscribe(eventName, listenerObj,callbackFct){
        if(this.obversers[eventName]==undefined){
            this.obversers[eventName] = [];
        }
        this.obversers[eventName].push({
            obj:listenerObj,
            fct: callbackFct
        });
    }

    unscribe(eventName,listenerObj){
        if(this.obversers[eventName]){
        let observersForEvent = this.obversers[eventName];
            for(let i=0; i<observersForEvent.length;i++){
                if(observersForEvent[i].obj == listenerObj){
                    observersForEvent.splice(i,1);
                    break;
                }
            }
        }
    }

    notifyObservers
    (eventName,param){
        let observersForEvent = this.obversers[eventName];
        for(let observer of observersForEvent){
            observer.fct.call(observer.obj,param);
        }
    }
}