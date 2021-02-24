import { loadingPage } from './loadingPage';
import { createMenuPage } from './menuPage';
import { createAboutPage } from './aboutPage';
import { createContactPage } from './contactPage';
import { clear } from './clearPage';
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