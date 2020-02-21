const homeTab = () => {

    const mainDiv = document.querySelector('#content');
    let title = document.createElement('h1');
    title.textContent ='Home';

    let mainText = document.createElement('p');
    mainText.textContent = "Welcome to the Coffee shop!"

    mainDiv.appendChild(title)
    mainDiv.appendChild(mainText)

}


export {homeTab}