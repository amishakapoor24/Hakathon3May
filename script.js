const app = document.getElementById('app');

const body = document.body;
body.style.backgroundColor = "rgb(238, 244, 247)";


// 🎯 Header Section
const header = document.createElement('header');
header.classList.add('py-5');
header.style.background = '#faf5b7'; // soft yellow
header.style.color = '#5a3e36'; // deep brown
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'center';
header.style.flexWrap = 'wrap';
header.style.gap = '30px';

// 📷 Profile Image (Left)
const profileImg = document.createElement('img');
profileImg.src = 'Screenshot_20250112-161922_Gallery.jpg'; // Replace with your actual image URL
profileImg.alt = 'Amisha Kapoor';
profileImg.style.width = '120px';
profileImg.style.height = '120px';
profileImg.style.borderRadius = '10px';
profileImg.style.objectFit = 'cover';
profileImg.style.border = '5px solid rgb(236, 199, 166)';

// 📝 Text Content (Right)
const textContent = document.createElement('div');
textContent.style.textAlign = 'left';

const name = document.createElement('h1');
name.innerText = 'Amisha Kapoor';
name.style.fontSize = '2.2rem';
name.style.marginBottom = '0.5rem';

const title = document.createElement('p');
title.innerText = 'Web Developer & Learner';
title.style.fontSize = '1.2rem';
title.style.margin = '0';

textContent.append(name, title);

// 📦 Append to Header
header.append(profileImg, textContent);
app.appendChild(header);




// 🧍 About Section
const about = document.createElement('section');
about.classList.add('container', 'py-4');

const aboutHeading = document.createElement('h2');
aboutHeading.innerText = 'About Me';
aboutHeading.classList.add('mb-3');

const aboutText = document.createElement('p');
aboutText.innerText = 'I am a passionate BCA student learning web development. I love building creative, responsive websites using HTML, CSS, and JavaScript.';

about.append(aboutHeading, aboutText);
app.appendChild(about);




// 🛠️ Skills Section (Flexbox)
const skillsSection = document.createElement('section');
skillsSection.classList.add('container', 'py-4');

const skillsHeading = document.createElement('h2');
skillsHeading.innerText = 'Skills';
skillsHeading.classList.add('mb-3', 'text-center');
skillsSection.appendChild(skillsHeading);

// Flexbox Container
const flexContainer = document.createElement('div');
flexContainer.style.display = 'flex';
flexContainer.style.flexWrap = 'wrap';
flexContainer.style.justifyContent = 'center';
flexContainer.style.gap = '20px';
flexContainer.style.rowGap = '15px';
flexContainer.style.padding = '10px';

const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'DBMS', 'Git', 'Problem Solving', 'Python'];

skills.forEach(skill => {
  const skillCard = document.createElement('div');
  skillCard.classList.add('border', 'rounded', 'p-3', 'shadow-sm');
  skillCard.style.backgroundColor = '#f4f1ee'; // soft light brown/neutral
  skillCard.style.color = '#5A3E36'; // deep brown
  skillCard.style.minWidth = '120px';
  skillCard.style.textAlign = 'center';
  skillCard.style.fontWeight = '600';
  skillCard.style.flex = '1 1 150px';
  skillCard.innerText = skill;
  flexContainer.appendChild(skillCard);
});

skillsSection.appendChild(flexContainer);
document.body.appendChild(skillsSection);




skillsSection.append(skillsHeading, flexContainer);
app.appendChild(skillsSection);

// 🧩 Projects Section (Grid)
const projectsSection = document.createElement('section');
projectsSection.classList.add('container', 'py-4');

const projectsHeading = document.createElement('h2');
projectsHeading.innerText = 'Projects';
projectsHeading.classList.add('mb-3');

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

const projects = [
  { title: 'Portfolio Website', desc: 'Responsive personal site using HTML/CSS/JS' },
  { title: 'To-Do App', desc: 'JavaScript-based task manager with alarms' },
  { title: 'E-Commerce Template', desc: 'Product grid with filtering features' }
];

projects.forEach(p => {
  const card = document.createElement('div');
  card.classList.add('card', 'shadow', 'p-3');
  card.style.border = '1px solid rgb(243, 225, 182)';
  
  const cardTitle = document.createElement('h5');
  cardTitle.innerText = p.title;
  cardTitle.classList.add('mb-2');

  const cardText = document.createElement('p');
  cardText.innerText = p.desc;

  card.append(cardTitle, cardText);
  gridContainer.appendChild(card);
});

projectsSection.append(projectsHeading, gridContainer);
app.appendChild(projectsSection);

// 📬 Contact Section
const contactSection = document.createElement('section');
contactSection.classList.add('container', 'py-4');

const contactHeading = document.createElement('h2');
contactHeading.innerText = 'Contact';
contactHeading.classList.add('mb-3');

const form = document.createElement('form');
form.classList.add('row', 'g-3');

const nameInput = document.createElement('input');
nameInput.classList.add('form-control');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Your Name');

const emailInput = document.createElement('input');
emailInput.classList.add('form-control');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Your Email');

const messageInput = document.createElement('textarea');
messageInput.classList.add('form-control');
messageInput.setAttribute('rows', '3');
messageInput.setAttribute('placeholder', 'Your Message');

const sendBtn = document.createElement('button');
sendBtn.classList.add('btn', 'btn-primary', 'mt-2');
sendBtn.setAttribute('type', 'submit');
sendBtn.innerText = 'Send Message';

form.append(nameInput, emailInput, messageInput, sendBtn);
contactSection.append(contactHeading, form);
app.appendChild(contactSection);

// 👣 Footer
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.style.backgroundColor = '#343a40';
footer.style.color = '#ccc';
footer.style.textAlign = 'center';
footer.style.padding = '1rem';

footer.innerText = '© 2025 Amisha Kapoor | All rights reserved.';
app.appendChild(footer);
