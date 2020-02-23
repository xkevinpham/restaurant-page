const menuTab = () => {
    const menuDiv = document.createElement('#content');
    menuDiv.id = 'menu';
    const menu = document.createElement('h1');
    menu.textContent = 'Menu'

    const coffee5 = document.createElement('li');
        coffee5.textContent = 'Arabica coffee roasted for 5 hours'
    const coffee4 = document.createElement('li');
        coffee4.textContent = 'Arabica coffee beans roasted for 4 hours'
    const coffee3 = document.createElement('li');
        coffee3.textContent = 'Arabica coffee beans roasted for 3 hours'
    const coffee2 = document.createElement('li');
        coffee2.textContent = 'Arabica coffee beans roasted for 2 hours'
    const coffee1 = document.createElement('li');
        coffee1.textContent = 'Arabica coffee beans roasted for 1 hour'





    /** 
    <h2>Coffee</h2>
    <h3>The Energy for Success No.5</h3>
    <div class = "description">Arabica coffee roasted for 5 hours.</div>
    <h3>The Energy for Creativity No.4</h3>
    <div class = "description">Arabica coffee roasted for 4 hours.</div>
    <h3>The Energy for Ideas No.3</h3>
    <div class = "description">Arabica coffee roasted for 3 hours.</div>
    <h3>The Energy for Discovery No.2</h3>
    <div class = "description">Arabica coffee roasted for 2 hours.</div>
    <h3>The Energy for Thoughts No.1</h3>
    <div class = "description">Arabica coffee roasted for 1 hour.</div>
    **/


    menu.appendChild(coffee5);
    menu.appendChild(coffee4);
    menu.appendChild(coffee3);
    menu.appendChild(coffee2);
    menu.appendChild(coffee1);
    
    menuDiv.appendChild(menu);


    return menuDiv;
}


export {menuTab}