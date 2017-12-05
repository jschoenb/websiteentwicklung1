class WhatsApp {
    constructor(){
        this.contactList = new ContactList();
        this.personnelId = undefined;
    }

    init(){
        this.loadFromJSON();
    }

    loadFromJSON(){
        //let that = this;
        $.getJSON("json/contacts.json",(data)=>{
            console.log(this);
            this.personnelId = data.personnelId;
            for(let person of data.persons){
                let contact = new Person(person.id,person.name,person.img,person.online);
                console.log(contact);
                this.contactList.addContact(contact);
                this.addMessageToContact(contact,person,false);
            }
            for(let group of data.groups) {
                let g = new Group(group.id, group.name, group.img);
                this.contactList.addContact(g);
                this.addMessageToContact(g,group,true);
                for(let contactId of group.members){
                    if(contactId !== this.personnelId){
                        let c = this.contactList.getContactById(contactId);
                        if(c){
                            g.addContact(c);
                            c.addGroup(g);
                        }
                    }
                }
            }

            this.contactList.printContactList();
        });
    }

    addMessageToContact(contact,jsonContact,isGroupMsg){
        for(let msg of jsonContact.messages){
            let message = new Message(msg.text,msg.time,msg.senderId,isGroupMsg);
            contact.addMessage(message);
        }
    }
}