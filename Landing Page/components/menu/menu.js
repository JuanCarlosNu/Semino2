 //this DoMcontentLoaded allows us to put the script tag anywhere.

 document.addEventListener('DOMContentLoaded', function () {
  
    const menuButton = document.getElementById('menu-button');

    const menuContainer = document.getElementById('menu-container');
  
    menuButton.addEventListener('click', function () {
      if (menuContainer.style.right === '0%') {
        menuContainer.style.right = '-30%';
      } else {
        menuContainer.style.right = '0%';
      }
    });
  });