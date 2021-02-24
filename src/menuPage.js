function createMenuPage() {
    let content = document.getElementById('content');
    content.classList.add('menu'); 

    //Set active status on current page
    let menuBttn = document.getElementById('menu');
    menuBttn.classList.add('active');

    //Main container of menu page
    let container = document.createElement('div');
    container.classList.add('container');

    let restaurantName = document.createElement('h4');
    restaurantName.classList.add('restaurantName');
    restaurantName.innerText = 'Papancherrye';
    container.appendChild(restaurantName);

    let menuTitle = document.createElement('h1');
    menuTitle.innerText = 'Menu';
    container.appendChild(menuTitle);

    const borders = document.createElement('hr');
    container.appendChild(borders);
    
    let menuContent = document.createElement('div');
    menuContent.classList.add('main-menu');
    container.appendChild(menuContent);

    const menu = [
        {
          name: "Papanash \"The classic\".........................15$",
          ingredients:
            "Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa.",
        },
        {
          name: "Papanash \"Chic'n sweet\"......................20$",
          ingredients:
            "Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa.",
        },
        {
          name: "Papanash \"Sweet for my lips\"...........23$",
          ingredients:
            "Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa.",
        },
        {
            name: "Papanash \"I can't resist\"......................20$",
            ingredients:
              "Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa.",
        },
        {
            name:  "Papanash \"This is heaven\"....................17$",
            ingredients:
              "Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa.",
        },
    ];

    for(let i=0; i<menu.length; i++) {
      const name = document.createElement('h2');
      name.classList.add('name');
      name.innerHTML = menu[i].name;
      menuContent.appendChild(name);

      const ingredients = document.createElement('p');
      ingredients.classList.add('ingredients');
      ingredients.innerHTML =  menu[i].ingredients;
      menuContent.appendChild(ingredients);

      const borderMeniu = document.createElement('hr');
      menuContent.appendChild(borderMeniu);
    }

    content.appendChild(container);
    document.body.style.backgroundImage = "url('media/Papanas1.jpg')";
}
export { createMenuPage };