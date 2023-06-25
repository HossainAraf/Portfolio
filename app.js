// .fa-solid
// .fa-bars
// .toggle-button
// .menu
// .x-icon
let toggleButton = document.querySelector(".toggle-button");
let xIcon = document.querySelector(".x-icon");
let mainMenu = document.querySelector(".menu");
let menuItem = document.querySelectorAll(".menu-item");

toggleButton.addEventListener('click', show);
xIcon.addEventListener('click', hide);
menuItem.forEach(item => item.addEventListener('click', menuItemClick));


function show () {
  mainMenu.style.display = 'flex';
  mainMenu.style.color = '#fff';
  mainMenu.style.backgroundColor = '#f7f7f9';
  toggleButton.style.display =  'none';
  xIcon.style.display = 'flex';
}
function hide () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
}

function menuItemClick () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
}
