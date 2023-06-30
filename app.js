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
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 1,
    title: 'TONIC',
    desc: 'B daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-2.png',
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 2,
    title: 'TONIC',
    desc: 'C daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-3.png',
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 3,
    title: 'TONIC',
    desc: 'D daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio.png',
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
];

let cardsHtmlGenerator = '';

projectList.forEach((project) => {
  cardsHtmlGenerator += `
  <!-- card ${project.id} -->
    <div class="work-first">
      <div class="work-img">
        <img src="${project.imgUrl}" alt="${project.title}" />
      </div>
      <div class="work-description">
        <h3 class="card-title">${project.title}</h3>
        <ul class="card-items"> 
         ${project.tags
    .map((tag) => `<li class="card-li">${tag}</li>`)
    .join(' ')} 
        </ul>
        <div class="card-btn-container">
          <button class="btn btn-primary see-project-btn" onclick="popupW(${
  project.id
})">See Project</button>
        </div>
      </div>
  </div>
  `;
}),

cardsContainer.innerHTML = cardsHtmlGenerator;

function popupW(id) {
  const popupHtmlGenerator = `
  <div class="popup-wrapper">
   <div class="popup-inner">
    <div class="popup-primary-text">
    <div class="popup-title-container">
      <h3 class="popup-title">${projectList[id].title}</h3>
      <div class="popup-top-action-container">
        <div class="inner">
          <a href="${projectList[id].live}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Live <img src="dist/images/live.svg" class="popup-action-btn-icon" alt="" /></a>
          <a href="${projectList[id].source}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Source <img src="dist/images/white-github.svg" class="popup-action-btn-icon" alt="" /></a>
        </div>
      </div>
    </div>
    <ul class="card-list popup-tags">${projectList[id].tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')}</ul>
  </div>
    <div class="img-container">
      <button class="btn popup-cancel" onclick="popupWC()">
          <img src="img/Icon-cross.png" alt="icon cancel" class="popup-cancle-icon" />
      </button>
      <div class="popup-img-box"> 
      <img src="${projectList[id].imgUrl}" alt="${projectList[id].title}" />
      </div>

    </div>

    //  <div><p>${projectList[id].desc}</p></div>
    <div class="popup-left-block">
      <p>${projectList[id].desc}</p>
    </div>
    <div class="popup-action-container">
      <a href="${
  projectList[id].live
}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Live <img src="dist/images/live.svg" class="popup-action-btn-icon" alt="" /></a>
      <a href="${
  projectList[id].source
}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Source <img src="dist/images/white-github.svg" class="popup-action-btn-icon" alt="" /></a>
    </div>
  </div>
</div>
`;

  popup.innerHTML = popupHtmlGenerator;

  popup.style.display = 'flex';
}

const x = 0;
if (x === 1) {
  popupWC();
  popupW();
}
