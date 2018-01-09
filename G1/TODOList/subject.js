/**
 * Created by P23460 on 12.12.2016.
 */

export default class Subject {
    constructor() {
        //assoziativer Array mit Array
        this.observers = [];
    }

    //method used to add a listener/observer
    subscribe(topic, listenerObj, callbackFct) {
        if (this.observers[topic] == undefined) {
            this.observers[topic] = new Array();
        }
        this.observers[topic].push({
            obj: listenerObj,
            fct: callbackFct,
        });
    }

    //method used to remove a listener/observer
    unsubscribe(topic, listenerObj) {
        if(this.observers[topic]!=undefined){
            let observersForTopic = this.observers[topic];
            for (let i=0; i < observersForTopic.length;i++){
                if(observersForTopic[i].obj === listenerObj){
                    console.log("removing observer");
                    observersForTopic.splice(i,1);
                    return;
                }
            }
        }
    }

    //calls the registered callback of every observer;
    // callback function reveices object in param as parameter
    notifyObservers(topic, param) {
        let observersForTopic = this.observers[topic];
        if(observersForTopic) {
            for (let observer of observersForTopic) {
                observer.fct.call(observer.obj, param);
            }
        }
    }
}
