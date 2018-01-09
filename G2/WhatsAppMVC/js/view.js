
import {getInstance as Model} from "./model.js";
import Person from "./person.js";

let view;

let printMessage = Symbol();
let printContact = Symbol();
let printHeader = Symbol();

class View {
    constructor(){
        this.DOM = {
            inputDiv: $(".chatinput"),
            input: $("#chatinput"),
            list: $("#chatlist")
        }
        this.DOM.inputDiv.hide();
    }

    getDOM() {
        return this.DOM;
    }

    //callback method
    printContact(contact){
        console.log(this);
        this[printContact](contact);
    }

    //callback method
    contactChanged(param){
        $(".chatinput").show();
        //clear chat window
        $(".chatmessage").remove();
        for(let msg of param.contact.messages){
            this[printMessage](msg,param.userId,$("#chatbody>div"));
        }
        //reset header
        this[printHeader](param.contact);
        $(param.elem).removeClass("new-message");
    }

    //callback method
    messageReceived(param){
        if(param.currentChatPartner && param.currentChatPartner.id == param.receiver){
            this[printMessage](param.msg, param.userId,$("#chatbody>div"));
        } else {
            $("#contact_" + param.receiver).addClass("new-message");
        }
    }
    //==========private methods ===================

    [printMessage](msg, userId, parent) {
        let username ="";
        if(msg.isGroupMsg && userId !== msg.senderId){
            username = "<b>"+Model().getContactById(msg.senderId).name + "</b></br>";
        }
        let html = $('<div class="chatmessage '+(userId===msg.senderId?'me':'others')+'">'+
            '<div><div>'+username+msg.text+'</div>'+
            '<div class="chatmessage_time">'+msg.time+'</div>'+
            '</div></div>');
        parent.append(html);

    }

    [printHeader](contact){
        $(".chatimage").attr("src",contact.img);
        $(".chatname").empty();
        $(".chatname").append("<h2>"+contact.name+"</h2>");
        if(contact instanceof Person){
            $(".chatname").append("<p>"+contact.online+"</p>");
        } else {
            let html = "<p>";
            for(let i=0; i<contact.contacts.length;i++){
                html += contact.contacts[i].name;
                if (i < contact.contacts.length - 1) {
                    html  += ", ";
                }
            }
            html += "</p>"
            $(".chatname").append(html);
        }
    }

    [printContact](contact){
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

//Singleton pattern
export function getInstance() {
    if(!view) {
        view = new View();
    }
    return view;
}

