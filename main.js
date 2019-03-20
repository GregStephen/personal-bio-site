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
let anchors = document.getElementsByTagName("a");
const navToBio = document.getElementById("navToBio");
const navToTech = document.getElementById("navToTechnologies");
const navToProj = document.getElementById("navToProjects");
const bioPage = document.getElementById("bioPage");
const techPage = document.getElementById("technologiesPage");
const projPage = document.getElementById("projectsPage");

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

// anchors.addEventListener('click', function(e){

//   e.preventDefault();


// });

navToBio.addEventListener('click', function(e){
  e.preventDefault();
bioPage.style.display = "block";
techPage.style.display = "none";
projPage.style.display = "none";
});

navToTech.addEventListener('click', function(e){
  e.preventDefault();
  bioPage.style.display = "none";
  techPage.style.display = "block";
  projPage.style.display = "none";
});

navToProj.addEventListener('click', function(e){
  e.preventDefault();
  bioPage.style.display = "none";
  techPage.style.display = "none";
  projPage.style.display = "flex";
});

const init = () => {
    createProjectCards();
}

init();