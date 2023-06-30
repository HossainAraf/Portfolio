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
  toggleButton.style.display = 'none'; xIcon.style.display = 'flex'; xIcon.style.right = '0';
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
    desc: 'A: Lorem Ipsum is simply dummy text of the printing and typesetting industry.    text of the printing and typesetting industry. Lorem Ipsum has been the industry and  make a type specimen book. It has survived not only five centuries.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-1.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 1,
    title: 'TONIC',
    desc: 'B  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be   a type specimen book. It has survived not only five centuries.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-2.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 2,
    title: 'TONIC',
    desc: 'C Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be   a type specimen book. It has survived not only five centuries.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio-3.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
  {
    id: 3,
    title: 'TONIC',
    desc: 'D Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be   a type specimen book. It has survived not only five centuries.',
    tags: ['CANOPY', 'Back End Dev', '2023'],
    imgUrl: 'img/Portfolio.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://www.linkedin.com/in/md-arafat-hossain-111403275/',
    source: 'https://ghttps://github.com/HossainAraf',
  },
];

let cardsGenerator = '';

projectList.forEach((project) => {
  cardsGenerator += `
  <!-- card ${project.id} -->
    <div class="work-first">
      <div class="work-img">
        <img src="${project.imgUrl}" alt="${project.title}" />
      </div>
      <div class="work-description">
        <h3 class="card-title">${project.title}</h3>
        <ul class="card-items"> 
         ${project.tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')} 
        </ul>
        <p class="project-desc">${project.desc}</p>
        <ul class="tech-items"> 
         ${project.tech.map((tech) => `<li class="tech-li">${tech}</li>`).join(' ')} 
        </ul>
        <div class="card-btn-container">
          <button class="see-project-btn" onclick="popupW(${project.id
})">See Project</button>
        </div>
      </div>
  </div>
  `;
});

cardsContainer.innerHTML = cardsGenerator;

function popupW(id) {
  const popupHtmlGenerator = `
  <div class="popup-wrapper">
   <div class="popup-inner">
    <div class="popup-primary-text">
    <div class="popup-title-container">
      <h3 class="popup-title">${projectList[id].title}</h3>
      <button class="popup-cancel" onclick="popupWC()">
      <img src="img/Icon-cross.png" alt="icon cancel" class="popup-cancle-icon" />
  </button>
      </div>
    </div>
    <ul class="card-list">${projectList[id].tags.map((tag) => `<li class="card-li">${tag}</li>`).join(' ')}</ul>
  </div>
    <div class="img-container">
      <div class="popup-img-box"> 
      <img src="${projectList[id].imgUrl}" alt="${projectList[id].title}" />
      </div>
    </div>
    <div class="popup-bottom">
      <div class="popup-desc">
        <p>${projectList[id].desc}</p>
      </div>
      <div class="pop-right">
      <ul class="technologies">${projectList[id].tech.map((tech) => `<li class="tech-li">${tech}</li>`).join(' ')}</ul>
      <img src='img/Vector4.png'>
      <div class="popup-action">
        <div class="acton-inside">
          <a href="${projectList[id].live}" target="_blank" class="popup-action-btn">See Live <img src="img/Icon-live.png" class="popup-action-btn-icon" alt="see live project icon" /></a>
        </div>
        <div class="acton-inside">
          <a href="${projectList[id].source}" target="_blank" class="popup-action-btn">See Source <img src="img/Icon-GitHub.png" class="popup-action-btn-icon" alt="github" /></a>
        </div>
      </div>
      </div>
  </div>
</div>`;
  popup.innerHTML = popupHtmlGenerator;
  popup.style.display = 'flex';
}
const x = 0;
if (x === 1) {
  popupWC();
  popupW();
}