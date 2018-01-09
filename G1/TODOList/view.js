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
        //encapsulate relevant DOM elements in common var
        this.DOM = {
            input: $('#todo-input'),
            list: $('#todo-list')
        }
    }

    //returns the relevent DOM
    getDOM() {
        return this.DOM;
    }

    //print an according task and append it to the list
    printTask(task){
       let html = this[getHTML](task);
       this.DOM.list.append(html);
    }

    //delete the DOM representation of a certain task
    deleteTask(task){
        $("#"+task.id).remove();
    }

    //update the DOM representation of a certain task
    updateTask(task){
        let t = $("#"+task.id);
        t.find(".check").prop("checked", task.complete);
        if(task.complete){
            t.css("background-color","grey");
        } else {
            t.css("background-color","white");
        }

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

//Singleton pattern
export function getInstance() {
    if(!view) {
        view = new View();
    }
    return view;
}
