import util from '../../helpers/util.js';
import projectData from '../../helpers/data/projectData.js';
import techData from '../../helpers/data/techData.js';

const createProjectCards = () => {
  let domString = '';
  domString += '<div class="row justify-content-around">';
  const techGotArray = [];
  techData.getTech()
    .then((technology) => {
      technology.forEach((techno) => {
        techGotArray.push(techno);
      })
    })
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `<div class="projectCard col-11 col-md-10 col-lg-4">`;
        domString +=    `<div class="projectTitle">${project.title}</div>`;
        domString +=    `<hr>`;
        domString +=    `<img class="projectScreenshot" src=${project.screenshot}>`;
        domString +=    `<hr class="hrUp">`;
        domString +=    `<p class="projectDescription">${project.description}</p>`;
        domString +=    '<div class="projectTechUsed container">'
        domString +=      '<div class="row align-items-center justify-content-around">';
        project.techUsed.forEach((tech) => {
          const techToPrint = techGotArray.filter(techn => techn.id === tech);
          domString += `<img class="tech-icon ${techToPrint[0].name}" src=${techToPrint[0].icon}>`;
        })
        domString +=  '</div>';
        domString += '</div>';
        domString +=    `<p class="url">See it <a target="_blank" href=${project.deployLink}>here</a></p>`;
        domString +=    `<p class="githubUrl"><a class="fab fa-2x fa-github-alt" target="_blank" href=${project.githubLink}></a></p>`;
        domString += `</div>`;
      })
      domString += '</div>';
      util.printToDom('projectsPage', domString);
    })
    .catch(err => console.error(err));
};

export default { createProjectCards };
