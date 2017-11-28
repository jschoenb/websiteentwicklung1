class Contact {
    constructor(id,name,img){
        this.id = id;
        this.name = name;
        this.img = img;
        this.hasNewMsg = false;
        this.messages = [];
    }


    printContact(){
        let contactDiv = $('<div id="contact_'+this.id+'" class="chatinfo"><div class="flex">' +
            '<img class="chat_img" src="'+this.img+'">'+
            '</div>');
        $("#chatlist").prepend(contactDiv);
        
    }
}