// .fa-solid
// .fa-bars
// .toggle-button
// .menu
// .x-icon
let toggleButton = document.querySelector(".toggle-button");
let xIcon = document.querySelector(".x-icon");
let mainMenu = document.querySelector(".menu");

toggleButton.addEventListener('click', show);
xIcon.addEventListener('click', hide);

function show () {
  mainMenu.style.display = 'flex';
  mainMenu.style.color = '#fff';
  mainMenu.style.backgroundColor = '#f7f7f9';

// mainMenu.style.top = '0';
  toggleButton.style.display =  'none';
  xIcon.style.display = 'flex';
  xIcon.style.top = '0';
  xIcon.style.left = '0';
}
function hide () {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
}
