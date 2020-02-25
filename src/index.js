import _ from 'lodash';
import {homeTab} from './src/home';
import {createNavBar} from './src/navbar'
import {menuTab} from './src/menu'
import {createAbout} from './src/about'
import {createStyle} from './src/createStyle'


//-clears Output
function clear(){
    let contentDiv = document.querySelector("#content")    
    contentDiv.innerHTML=""}

///------------
document.addEventListener("DOMContentLoaded", () => {
createStyle()
createNavBar()

const logo = document.querySelector(".logo")
logo.addEventListener("click", clear)

//when clicking "services" will return the page
const services = document.querySelector("#home")
services.addEventListener("click", () => {
    clear()
    homeTab()
})
//when clicking projects will return its page
const projects = document.querySelector("#projects")
projects.addEventListener("click", () => {
    clear()
    menuTab()
})

const about = document.querySelector("#about")
about.addEventListener("click", () => {
    clear()
    createAbout()
})
});