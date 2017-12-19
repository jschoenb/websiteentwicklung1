
import Subject from "./subject.js";
import Person from "./person.js";
import Group from "./group.js";
import Message from "./message.js";

let whatsAppModel;

//private Methoden
let loadFromJSON = Symbol();
let addMessageToContact = Symbol();

class WhatsAppModel extends Subject{
    constructor(){
        super();
        this.personnelId = undefined;
        this.currentChatPartner = undefined;
        this.contactList = [];
        this[loadFromJSON]();
    }

    getContactById(contactId){
        for(let contact of this.contactList){
            if(contact.id === contactId){
                return contact;
            }
        }
        return undefined;
    }

    addContact(contact){
        this.contactList.push(contact);
        //trigger event
        super.notifyObservers("addContact",contact);
    }

    [loadFromJSON](){
        $.getJSON("json/contacts.json",(data) => {
            this.personnelId = data.personnelId;
            for(let person of data.persons){
                let contact = new Person(person.id,person.name,person.img,person.online);
                this[addMessageToContact](contact,person,false);
                this.addContact(contact);
            }
            for(let group of data.groups){
                let g = new Group(group.id,group.name, group.img);
                this[addMessageToContact](g,group,true);
                for(let contactId of group.members){
                    if(contactId!=this.userId){
                        let c = this.getContactById(contactId);
                        if(c){
                            g.addContact(c);
                            c.addGroup(g);
                        }
                    }
                }
                this.addContact(g);
            }
        });
    }

    [addMessageToContact](contact,jsonContact,isGroupMsg){
        for(let msg of jsonContact.messages){
            let message = new Message(msg.text,msg.time,msg.senderId,isGroupMsg);
            contact.addMessage(message);
        }
    }

}

//Singleton
export function getInstance() {
    if(!whatsAppModel){
        whatsAppModel = new WhatsAppModel();
    }
    return whatsAppModel;
}