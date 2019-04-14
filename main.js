const projects = [
    {
        title: "Cool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      },
      {
        title: "Cool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      },
      {
        title: "Cool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      },
      {
        title: "UNCool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      },
      {
        title: "UNCool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      },
      {
        title: "Cool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      },
      {
        title: "Cool Project", 
        screenshot: "https://www.classicgame.com/uploaded/thumb/pacmanclassic_300x200.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
      }
];
let navLinks = document.getElementsByClassName("navLink");
const navToBio = document.getElementById("navToBio");
const navToTech = document.getElementById("navToTechnologies");
const navToProj = document.getElementById("navToProjects");
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
  let domString = ''
  for(let i = 0; i < projects.length; i++){
      if(projects[i].available) {
          domString += `<div class="projectCard">`;
          domString +=    `<div class="projectTitle">${projects[i].title}</div>`;
          domString +=    `<hr>`;
          domString +=    `<img class="projectScreenshot" src=${projects[i].screenshot}>`;
          domString +=    `<hr class="hrUp">`;
          domString +=    `<p class="projectDescription">${projects[i].description}</p>`;
          domString +=    `<p class="projectTechUsed">${projects[i].technologiesUsed}</p>`;
          domString +=    `<p class="url">See it <a target="_blank" href=${projects[i].url}>here</a></p>`;
          domString +=    `<p class="githubUrl"><a class="fab fa-2x fa-github-alt" target="_blank" href=${projects[i].githubUrl}></a></p>`;
          domString += `</div>`;
      }
  };
  printToDom('projectsPage', domString)
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
    createProjectCards();
    showBioPage();
    eventListeners();
};

init();