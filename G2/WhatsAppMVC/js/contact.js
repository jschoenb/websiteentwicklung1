//simple DAO (data access object)
//remove all "print" (DOM related) methods
export default class Contact{
    constructor(id,name,img){
        this.id = id;
        this.name = name;
        this.img = img;
        this.hasNewMsg = false;
        this.messages = [];

    }

    addMessage(msg) {
        this.messages.push(msg);
    }
}

