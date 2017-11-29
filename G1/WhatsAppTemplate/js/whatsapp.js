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
            }
        });
    }
}