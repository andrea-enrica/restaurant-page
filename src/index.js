import { loadingPage } from './loadingPage';
import { createMenuPage } from './menuPage';
import { createAboutPage } from './aboutPage';
import { createContactPage } from './contactPage';

loadingPage();

//Home tab
let homeBttn = document.getElementById('home');
homeBttn.onclick = () => {
    clear();
    loadingPage();
}

//Menu tab
let menuBttn = document.getElementById('menu');
menuBttn.onclick = () => {
    clear();
    createMenuPage();
}
//About tab
let aboutBttn = document.getElementById('about');
aboutBttn.onclick = () => {
    clear();
    createAboutPage();
}
//Contact tab
let contactBttn = document.getElementById('contact');
contactBttn.onclick = () => {
    clear();
    createContactPage();
}

function clear() {
    let content = document.getElementById('content');
    let container = document.getElementsByClassName('container')[0];
    container.remove();
    content.className = '';
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = '';
    }
}