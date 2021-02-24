function createContactPage() {
    let content = document.getElementById('content');
    content.classList.add('contact');
    
    //Set active status on current page
    let contactBttn = document.getElementById('contact');
    contactBttn.classList.add('active'); 

    //Main container of contact page
    let container = document.createElement('div');
    container.classList.add('container');
    
    let restaurantName = document.createElement('h4');
    restaurantName.classList.add('restaurantName');
    restaurantName.innerText = 'Papancherrye';
    container.appendChild(restaurantName);

    let contactTitle = document.createElement('h1');
    contactTitle.innerText = 'Contact Us';
    container.appendChild(contactTitle);

    let contactMotto = document.createElement('h4');
    contactMotto.classList.add('contactMotto');
    contactMotto.innerText = 'Mamanash would love to hear from you. Give us a call or send us an email.';
    container.appendChild(contactMotto);
    
    let contactContent = document.createElement('div');
    contactContent.classList.add('contact-main');

    let address = document.createElement('h5');
    address.innerText = 'Address';
    let addressContent = document.createElement('p');
    addressContent.innerText = "53 Papanas St. Cluj-Napoca ";

    let hours = document.createElement('h5');
    hours.innerText = 'Hours';
    let hoursContent = document.createElement('p');
    hoursContent.innerText ='Wednesday-Sunday: 12:00 - 20:00';

    let phoneMail = document.createElement('h5');
    phoneMail.innerText = 'Contact us';
    let phoneContent = document.createElement('p');
    phoneContent.innerText = 'Phone: 0720000000';
    let mailContent = document.createElement('p');
    mailContent.innerText = 'Email: papancherrye@notarealemail.com';
    
    contactContent.appendChild(address);
    contactContent.appendChild(addressContent);
    contactContent.appendChild(hours);
    contactContent.appendChild(hoursContent);
    contactContent.appendChild(phoneMail);
    contactContent.appendChild(phoneContent);
    contactContent.appendChild(mailContent);

    container.appendChild(contactContent);
    content.appendChild(container);
    document.body.style.backgroundImage = "url('media/Papanas1.jpg')";
}
export { createContactPage };