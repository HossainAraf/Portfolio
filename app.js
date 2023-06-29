const toggleButton = document.querySelector('.toggle-button');
const xIcon = document.querySelector('.x-icon');
const mainMenu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const popup = document.querySelector('#popup');
const cardsContainer = document.querySelector('#work');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.color = '#fff';
  mainMenu.style.opacity = '.93';
  toggleButton.style.display = 'none';
  xIcon.style.display = 'flex';
  xIcon.style.right = '0';
  navbar.style.display = 'flex';
  navbar.style.flexDirection = 'column';
  logo.style.alignSelf = 'flex-start';
  logo.style.paddingTop = '9%';
}

function hide() {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
  toggleButton.style.justifyContent = 'flex-end';
  navbar.style.flexDirection = 'row';
  logo.style.paddingTop = '9%';
}

function menuItemClick() {
  mainMenu.style.display = 'none';
  xIcon.style.display = 'none';
  toggleButton.style.display = 'flex';
  navbar.style.flexDirection = 'row';
}

toggleButton.addEventListener('click', show);
xIcon.addEventListener('click', hide);
menuItem.forEach((item) => item.addEventListener('click', menuItemClick));

function popupWC() {
  popup.style.display = 'none';
}

const projectList = [
  {
    id: 0,
    title: 'TONIC',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-1.png',
    live: '',
    source: 'https://github',
  },
