import WhatsApp from './whatsapp.js';

//o is the id of the current user

let whatsApp = new WhatsApp(0);

$(document).ready(function(){
    whatsApp.init();
});