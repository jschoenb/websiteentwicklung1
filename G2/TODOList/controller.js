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

    }
}

export function getInstance() {
    if(!controller) {
        controller = new Controller();
    }
    return controller;
}