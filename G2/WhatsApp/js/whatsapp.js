class WhatsApp {
    constructor(userId){
        this.userId = userId;
        this.contactList = new ContactList();
    }

    init(){
       this.loadFromJSON();
    }

    loadFromJSON(){

        $.getJSON("json/contacts.json",(data) => {
            console.log(this);
           console.log(data);
           for(let person of data.persons){
               let contact = new Person(person.id,person.name,person.img,person.online);
               this.contactList.addContact(contact);
           }

           for(let group of data.groups){

           }
           this.contactList.printContactList();
        });
    }
}