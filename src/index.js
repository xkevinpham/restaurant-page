import {homeTab} from './modules/home.js'
import {menu, menuTab} from './modules/menu.js'
import {contact, contactTab} from './modules/contact.js'
import style from "./index.css";


//Reset text to add in new texts
const clear = () => {
    let contentDiv = document.querySelector('#content');
    contentDiv.innerHTML('');
};

document.addEventListener("DOMContentLoaded", () => {
    loadStyle();
    navBar();
})

const menu = document.querySelector('#menu')
menu.addEventListener('click', () =>{
    clear();
    menuTab();
});

const home = document.querySelector('#home')
home.addEventListener('click', ()=> {
    clear();
    homeTab();
});

const contact = document.querySelector('#contact')
contact.addEventListener('click', ()=> {
    clear();
    contactTab();
})