class ContactList {
    constructor(){
        this.contactList = [];
    }

    addContact(contact){
        this.contactList.push(contact);
    }

    printContactList(){
        for(let contact of this.contactList){
            contact.printContact();
        }
    }
}