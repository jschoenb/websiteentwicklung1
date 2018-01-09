import Contact from './contact.js';

//simple DAO (data access object)
export default class Person extends Contact {
    constructor(id,name,img, online){
        super(id,name,img);
        this.online = online;
        this.groups = []
    }

    addGroup(group) {
        this.groups.push(group);
    }
}