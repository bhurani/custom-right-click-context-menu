'use strict';

const menu = document.querySelector('.menu'),
      menuWidth = menu.offsetWidth,
      menuHeight = menu.offsetHeight,
      shareMenu = menu.querySelector('.share-menu'),
      shareMenuWidth = shareMenu.offsetWidth;

window.addEventListener('contextmenu', e =>{
  e.preventDefault();

  let x = e.offsetX,
      y = e.offsetY,
      winWidth = window.innerWidth,
      winHeight = window.innerHeight;

  x = x > winWidth - menuWidth ? winWidth - menuWidth - 5 : x;
  y = y > winHeight - menuHeight ? winHeight - menuHeight - 5 : y;

  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.visibility = 'visible';

  if(x > (winWidth - menuWidth - shareMenuWidth)){
    shareMenu.style.left = '-200px';
  }else{
    shareMenu.style.left = '';
  }
});

window.addEventListener('click', () => menu.style.visibility = 'hidden');
