// .fa-solid
// .fa-bars
// .toggle-button
// .menu
// .x-icon
let toggleButton = document.querySelector(".toggle-button");
let xIcon = document.querySelector(".x-icon");
let mainMenu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");
let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');
let logo = document.querySelector('.logo');

toggleButton.addEventListener('click', show);
xIcon.addEventListener('click', hide);
menuItem.forEach(item => item.addEventListener('click', menuItemClick));


function show () {
  mainMenu.style.display = 'flex';
  mainMenu.style.color = '#fff';
  // mainMenu.style.backgroundColor = '#6070ff';
  // // mainMenu.style.backgroundSize = 'cover';
  // mainMenu.style.width = '100%';
  // mainMenu.style.height = '100%';
  // mainMenu.style.marginTop = '10%';
  mainMenu.style.opacity = '.93';
  // body.style.backgroundColor = '#6070ff';
  // body.style.filter = "blur(2px)";
  toggleButton.style.display =  'none';
  xIcon.style.display = 'flex';
  xIcon.style.right = '0';
  navbar.style.display = 'flex';
  navbar.style.flexDirection = 'column';
  // logo.style.display = 'flex';
  // logo.style.justifyContent = 'flex-start'
}

function hide () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
}

function menuItemClick () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
}
