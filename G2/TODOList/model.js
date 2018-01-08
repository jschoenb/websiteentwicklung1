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
        this.list = [];
    }

    getList () {
        return this.list;
    }

    add(text) {
        //TODO
    }

    remove(taskId) {
       //TODO
    }

    complete(taskId, isComplete) {
        //TODO

    }
}

ToDoModel.id = 0;

export function getInstance() {
    if(!toDoModel) {
        toDoModel = new ToDoModel();
    }
    return toDoModel;
}
