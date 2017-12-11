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

    printHeader(){
        $(".chatimage").attr("src",this.img);
        $(".chatname").empty();
        $(".chatname").append("<h2>"+this.name+"</h2>");
    }

    printContact () {
        $("#contact_" + this.id).remove();
        var lastMsg = this.messages[this.messages.length - 1];
        let contactDiv = $('<div id="contact_'+this.id+'" class="chatinfo"><div class="flex">'+
            '<img class="chat_img" src="'+this.img+'" alt="chatbild">'+
            '<div class="chat_text">'+
            '<h2>'+this.name+'</h2>'+
            '<p>'+(lastMsg==undefined?"":lastMsg.text)+'</p>'+
            '</div></div><div class="chat_time flex">'+
            '<p>'+(lastMsg==undefined?"":lastMsg.time)+'</p>'+
            '</div></div>');
        $("#chatlist").prepend(contactDiv);
        this.contactDiv = contactDiv;
    }

    printMessages(userId,parent,contactList){
        for(let m of this.messages){
            m.print(userId,parent,contactList);
        }
    }
}

