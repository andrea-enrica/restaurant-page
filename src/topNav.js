function createHeader(){
    let topNav = document.createElement('div');
    let homeBttn = document.createElement('button');
    let menuBttn = document.createElement('button');
    let aboutBttn = document.createElement('button');
    let contactBttn = document.createElement('button');

    topNav.setAttribute('class', 'topNav');
    homeBttn.innerText = 'HOME';
    homeBttn.setAttribute('id', 'home');
    menuBttn.innerText = 'MENU';
    menuBttn.setAttribute('id','menu');
    aboutBttn.innerText = 'ABOUT';
    aboutBttn.setAttribute('id','about');
    contactBttn.innerText = 'CONTACT US';
    contactBttn.setAttribute('id','contact');

    topNav.appendChild(homeBttn);
    topNav.appendChild(menuBttn);
    topNav.appendChild(aboutBttn);
    topNav.appendChild(contactBttn);

    return topNav;
}

export { createHeader };