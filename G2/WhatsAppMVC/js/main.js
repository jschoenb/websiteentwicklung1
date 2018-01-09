import {getInstance as getModel} from "./model.js";
import {getInstance as getController} from "./controller.js";
import {getInstance as getView} from "./view.js";


let model = getModel();
let view = getView();
window.controller = getController();

//subscribe for events
model.subscribe("addContact",view,view.printContact);
model.subscribe("contactChanged",view,view.contactChanged);
model.subscribe("newMessage",view,view.messageReceived);

model.init();
