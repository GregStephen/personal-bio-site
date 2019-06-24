import util from '../../helpers/util.js';
import projectData from '../../helpers/data/projectData.js';

const createProjectCards = () => {
  let domString = '';
  domString += '<div class="row justify-content-around">';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `<div class="projectCard col-11 col-md-10 col-lg-4">`;
        domString +=    `<div class="projectTitle">${project.title}</div>`;
        domString +=    `<hr>`;
        domString +=    `<img class="projectScreenshot" src=${project.screenshot}>`;
        domString +=    `<hr class="hrUp">`;
        domString +=    `<p class="projectDescription">${project.description}</p>`;
        domString +=    '<p class="projectTechUsed">';
        project.techUsed.forEach((tech) => {
          if (tech === 'HTML'){
            tech = '<i class="tech-icon fab fa-2x fa-html5"></i>';
          } else if (tech === "SCSS") {
            tech = '<i class="tech-icon fab fa-2x fa-sass"></i>';
          } else if (tech === "JavaScript") {
            tech = '<i class="tech-icon fab fa-2x fa-js-square"></i>';
          } else if (tech === "React") {
            tech ='<i class="tech-icon fab fa-2x fa-react"></i>';
          }
          domString += `${tech}`;
        })
        domString += '</p>';
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
