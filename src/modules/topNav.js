  
function createNavBar(){    
    let header = document.createElement("header")
    
    
    let nav = document.createElement("nav")
    
    let threeElements = document.createElement("ul")
    threeElements.className = "nav__links"
    
    const listElements = ["Home", "Menu", "Contact"]
    
    listElements.forEach(function (item){
        const eachItem = document.createElement("li")
        eachItem.id = `${item.toLocaleLowerCase()}`
        eachItem.innerHTML = `<a href="#">${item}</a>`
        threeElements.appendChild(eachItem)
    })
    
    let contactButton = document.createElement("a")
    contactButton.className = "cta"
    contactButton.href = "#"
    contactButton.textContent = "Contact"
    
    nav.appendChild(threeElements)
    header.appendChild(logo)
    header.appendChild(nav)
    
    header.appendChild(contactButton)
    document.querySelector("body").prepend(header)
}

export {createNavBar}