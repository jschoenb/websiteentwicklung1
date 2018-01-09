import {getInstance as Model} from "./model.js";
import {getInstance as Controller} from "./controller.js";
import {getInstance as getView, View} from "./view.js";

//get an instance to ensure that every object is intialized
let model = Model();
let view = getView();
let controller = Controller();

//register the view as observer to the model
//1 param event that should be caught, 2 param - object that should receive message, 3 param callback
//name of event catched here hast to be the same is in the corresponding notifyObservers Method (in Model)
model.subscribe("addTask",view,View.prototype.printTask);
model.subscribe("removeTask",view,View.prototype.deleteTask);
model.subscribe("updateTask",view,View.prototype.updateTask);
