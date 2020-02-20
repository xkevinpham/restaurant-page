import {home} from './modules/home.js'
import {menu} from './modules/menu.js'
import {contact} from './modules/contact.js'


const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', home);

const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);

const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);
    