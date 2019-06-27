import techData from '../../helpers/data/techData.js';
import util from '../../helpers/util.js';

const createTechPage = () => {
  techData.getTech()
    .then((technolgies) => {
      let domstring = '';
      domstring += '<div id="technologies" class="row justify-content-around">';
      technolgies.forEach((tech) => {
        domstring += '<div class="col-lg-3 col-md-4 col-6">';
        domstring += '<div class="tech-div">';
        domstring += `<h3>${tech.name}</h3>`;
        domstring += `<img class="tech-page-icon ${tech.name}" src=${tech.icon}>`;
        domstring += '</div>';
        domstring += '</div>';
      });
      domstring += '</div>';
      util.printToDom('technologiesPage', domstring);
    })
    .catch();


}

export default { createTechPage };