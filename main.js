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
      }
];

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
            domString +=    `<img class="projectScreenshot" src=${projects[i].screenshot}>`;
            domString +=    `<p class="projectDescription">${projects[i].description}</p>`;
            domString +=    `<p class="projectTechUsed">${projects[i].technologiesUsed}</p>`;
            domString +=    `<p class="url">See it <a target="_blank" href=${projects[i].url}>here</a></p>`;
            domString +=    `<p class="githubUrl"><a class="fab fa-2x fa-github-alt" target="_blank" href=${projects[i].githubUrl}></a></p>`;
            domString += `</div>`;
        }
    };
    printToDom('projectsPage', domString)
};



const init = () => {
    createProjectCards();
}

init();