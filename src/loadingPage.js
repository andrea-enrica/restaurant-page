import { createHeader } from './topNav';
import { createMenuPage } from './menuPage';
import { clear } from './clearPage';

function loadingPage() {
    let content = document.getElementById('content');
    content.classList.add('home');

    //Navigation bar 
    if (!document.getElementsByClassName('topNav')[0]) {
        let nav = createHeader();
        content.appendChild(nav);
    }

    //Set active status on current page
    let homeBttn = document.getElementById('home');
    homeBttn.classList.add('active');

    //Main container of home page
    let container = document.createElement('div');
    container.classList.add('container');

    let title = document.createElement('h1');
    let motto = document.createElement('h4');
    let deliveryBttn = document.createElement('button');
   
    title.innerText = 'Papancherrye';
    motto.innerText = 'The authentic taste from HOME';
    deliveryBttn.innerText = 'Delivery';
    deliveryBttn.onclick = () => {
        clear();
        createMenuPage();
    }
 
    container.appendChild(title);
    container.appendChild(motto);
    container.appendChild(deliveryBttn).setAttribute('id', 'delivery');

    content.appendChild(container);
    
}

export { loadingPage };