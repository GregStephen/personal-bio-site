import projectData from './helpers/data/projectData.js';
import apiKeys from './helpers/apiKeys.js';

let navLinks = document.getElementsByClassName("navLink");
// const navToBio = document.getElementById("navToBio");
// const navToTech = document.getElementById("navToTechnologies");
// const navToProj = document.getElementById("navToProjects");
const bioPage = document.getElementById("bioPage");
const techPage = document.getElementById("technologiesPage");
const projPage = document.getElementById("projectsPage");

/////////////////////////////////////////////
/////////////////FUNCTIONS///////////////////
/////////////////////////////////////////////
const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      console.error(projects);
      projects.forEach((project) => {
        domString += `<div class="projectCard">`;
        domString +=    `<div class="projectTitle">${project.title}</div>`;
        domString +=    `<hr>`;
        domString +=    `<img class="projectScreenshot" src=${project.screenshot}>`;
        domString +=    `<hr class="hrUp">`;
        // domString +=    `<p class="projectDescription">${projects.description}</p>`;
        domString +=    '<p class="projectTechUsed">';
        project.techUsed.forEach((tech) => {
          domString += `${tech}, `;
        })
        domString += '</p>';
        domString +=    `<p class="url">See it <a target="_blank" href=${project.deployLink}>here</a></p>`;
        domString +=    `<p class="githubUrl"><a class="fab fa-2x fa-github-alt" target="_blank" href=${project.githubLink}></a></p>`;
        domString += `</div>`;
      })
      printToDom('projectsPage', domString);
    })
    .catch(err => console.error(err));
};

const showBioPage = () => {
  scroll(0,0);
  bioPage.style.display = "block";
  techPage.style.display = "none";
  projPage.style.display = "none";
};

const showTechPage = () => {
  scroll(0,0);
  bioPage.style.display = "none";
  techPage.style.display = "block";
  projPage.style.display = "none";
};

const showProjPage = () => {
  scroll(0,0);
  bioPage.style.display = "none";
  techPage.style.display = "none";
  projPage.style.display = "flex";
};

const eventListeners = () => {
  for (const navLinkBtn of navLinks) {
    navLinkBtn.addEventListener('click', anchorClickFunction);
  }
};

const anchorClickFunction = (e) => {
  e.preventDefault();
  const navBtnId = e.target.id;
  if(navBtnId === "navToBio"){
    showBioPage();
  } else if(navBtnId === "navToTechnologies"){
    showTechPage();
  } else if (navBtnId === "navToProjects" || navBtnId === "navToProj"){
    showProjPage();
  }
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  createProjectCards();
  showBioPage();
  eventListeners();
};

init();