/**
 *  Controllers handle input.  Gets DOM refs from View.
 *  then sets event handlers for input text box to add new
 *  item.  Performs register() of both View and itself
 *  to set up list checkbox and remove click event handlers
 *  after DOM rebuilt.
 */
import {getInstance as Model} from "./model.js";
import {getInstance as View} from "./view.js";

let controller;

let init = Symbol()

class Controller {
    constructor(){
        this[init]();
    }

    [init](){
        let DOM = View().getDOM();

        //add
        //register event handler to input field and
        //insert new task after return is pressed
        DOM.input.keyup((ev)=>{
            if(ev.which==13 || ev.keyCode == 13){
                Model().add(DOM.input.val());
                DOM.input.val("");
            }
        });

        //remove
        //register event handler on list
        DOM.list.on('click','.remove',(ev)=>{
            //find according li element and get the id thereof
            //remove element from the model
            Model().remove($(ev.currentTarget).closest('li').attr('id'));
        });

        //update
        DOM.list.on('click','.check',(ev)=>{
            //find according li element and get the id thereof as well as the completed checkbox value
            //update the element in the model
            Model().complete($(ev.currentTarget).closest('li').attr('id'),
                $(ev.currentTarget).is(':checked'));
        })
    }
}

//Singleton pattern
export function getInstance() {
    if(!controller) {
        controller = new Controller();
    }
    return controller;
}