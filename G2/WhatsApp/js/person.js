class Person extends Contact{
    constructor(id,name,img,online){
        super(id,name,img);
        this.online = online;
        this.groups = [];
    }
}