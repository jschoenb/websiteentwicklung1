/**
*  View handle output to template.  On init gets DOM refs,
*  and expose to controller.  When model calls notify(),
*  View queries model for data and data performs pres. logic.
*/
let view;

let getHTML = Symbol();
let isChecked = Symbol();

export class View {
    constructor(){
        this.DOM = {
            input: $('#todo-input'),
            list: $('#todo-list')
        }
    }

    getDOM() {
        return this.DOM;
    }

    addTask(task){
       //TODO
    }

    deleteTask(task){
        //TODO
    }

    updateTask(task){
        //TODO
    }
    
    //==========private methods ===================
    [isChecked](elem) {
        return elem.complete === true ? 'checked': '';
    }

    [getHTML](task){
        let html ='<li id="'+task.id+'" class="list-group-item">'+
            '<input class="check" type="checkbox"' + this[isChecked](task) +'>'+
            '<div class="'+this[isChecked](task)+'">'+task.val+'</div>'+
            '<div class="remove">X</div></li>';
        return html;
    }
}

export function getInstance() {
    if(!view) {
        view = new View();
    }
    return view;
}
