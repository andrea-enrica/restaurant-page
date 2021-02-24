function createAboutPage() {
    let content = document.getElementById('content');
    content.classList.add('about');

    //Set active status on current page
    let aboutBttn = document.getElementById('about');
    aboutBttn.classList.add('active');

    //Main container of about page
    let container = document.createElement('div');
    container.classList.add('container');
    
    let restaurantName = document.createElement('h4');
    restaurantName.classList.add('restaurantName');
    restaurantName.innerText = 'Papancherrye';
    container.appendChild(restaurantName);

    let aboutTitle = document.createElement('h1');
    aboutTitle.innerText = 'Romanian culinary story';
    container.appendChild(aboutTitle);
    
    let aboutContent = document.createElement('div');
    aboutContent.classList.add('about-main');
    container.appendChild(aboutContent);

    let ourStory = document.createElement('p');
    ourStory.innerText = "Ut at mollis sapien, non condimentum metus. Etiam eleifend ullamcorper felis a consectetur. Morbi vulputate condimentum nunc hendrerit facilisis. Curabitur ac risus nec sem tristique pharetra. Nulla ornare consectetur libero eu congue. Suspendisse vulputate varius erat, vitae pulvinar justo mattis ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sit amet consectetur dolor. Donec nec vulputate erat. Integer tempus volutpat orci sed consectetur. Donec tellus lorem, porttitor quis egestas id, mattis a arcu. Nullam et est posuere, ornare nibh nec, tempus nulla. In sit amet maximus augue. Etiam accumsan leo a urna condimentum iaculis. Quisque fermentum id est placerat fringilla.";
    aboutContent.appendChild(ourStory);
    
    content.appendChild(container);
    document.body.style.backgroundImage = "url('media/Papanas1.jpg')";
}
export { createAboutPage };