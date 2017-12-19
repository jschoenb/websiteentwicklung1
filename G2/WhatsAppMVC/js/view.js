
import {getInstance as Model} from "./model.js";

let view;

let printMessage = Symbol();
let printContact = Symbol();
let printHeader = Symbol();

class View {

    addContact(contact){
        this[printContact](contact);
    }


    [printContact](contact) {
        $("#contact_" + contact.id).remove();
        var lastMsg = contact.messages[contact.messages.length - 1];
        let contactDiv = $('<div id="contact_'+contact.id+'" class="chatinfo"><div class="flex">'+
            '<img class="chat_img" src="'+contact.img+'" alt="chatbild">'+
            '<div class="chat_text">'+
            '<h2>'+contact.name+'</h2>'+
            '<p>'+(lastMsg==undefined?"":lastMsg.text)+'</p>'+
            '</div></div><div class="chat_time flex">'+
            '<p>'+(lastMsg==undefined?"":lastMsg.time)+'</p>'+
            '</div></div>');
        $("#chatlist").prepend(contactDiv);
    }
}

export function getViewInstance() {
    if(!view){
        view = new View();
    }
    return view;
}

let model = Model();
model.subscribe("addContact",getViewInstance(),View.prototype.addContact);