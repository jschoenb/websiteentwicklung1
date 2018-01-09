/**
 *  Model holds data with access and modify methods.
 *  register() adds items to subject.  When model state
 *  changes calls subject.notifyObservers() to redraw list.
 */
import Subject from './subject.js';

let toDoModel;

class ToDoModel extends Subject {
    constructor() {
        super();
        //list of tasks
        this.list = [];
    }

    getList () {
        return this.list;
    }

    //adds a task into the list and notifies the observers
    add(text) {
        //simple JSON Task object - could also be implemented in own class
        let task = {
            id: ++ToDoModel.id,
            val: text,
            complete : false
        }
        this.list.push(task);
        //throw the event named addTask and pass the param task
        super.notifyObservers("addTask",task);
    }

    remove(taskId) {
       for(let i=0; i < this.list.length;i++){
           if(this.list[i].id==taskId){
               //throw the event named removeTask and pass the task as param
               super.notifyObservers("removeTask",this.list[i]);
               //remove the item from the array
               this.list.splice(i,1);
           }
       }
    }

    complete(taskId, isComplete) {
        for(let i=0; i < this.list.length;i++){
            if(this.list[i].id==taskId){
                //change the completed property
                this.list[i].complete = isComplete;
                //throw the event named updateTask and pass the task as param
                super.notifyObservers("updateTask",this.list[i]);
            }
        }

    }
}

//static variable to ensure unique value
ToDoModel.id = 0;

//Singleton pattern
export function getInstance() {
    if(!toDoModel) {
        toDoModel = new ToDoModel();
    }
    return toDoModel;
}
