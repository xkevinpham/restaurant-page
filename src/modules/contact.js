const contactTab = () => {

const mainDiv = document.querySelector('#content');
let title = document.createElement('h1');
title.textContent = 'About Us';

let mainText = document.createElement('p');
mainText.textContent = "Helllo welcome!"

mainDiv.appendChild(title);
mainDiv.appendChild(mainText);

}

export {contactTab}