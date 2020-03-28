import util from '../../helpers/util.js';

const buildBioPage = () => {
  let domString = '';
  domString += '<div class="bioDiv row justify-content-sm-center align-items-center">';
  domString += '<img id="bioPic" class="col-12 col-sm-5 col-lg-5" src="../assets/pictures/me_and_lu.jpg" alt="me and my daughter">';
  domString += '<p class="bioBit col-12 col-sm-5 offset-sm-1 col-lg-5">I’m an aspiring full stack web developer living in Nashville, TN! Interested in all things code, ';
  domString += 'I began delving deep into the world of programming with self study using Udemy, Team Treehouse and other various applications. ';
  domString += 'I have been a student at NSS since February 2019 learning HTML, CSS, C#, SQL, JavaScript and React, creating multiple website applications in the process ';
  domString += 'and getting familiar with working on a team for a project.';
  domString += '</p>';
  domString += '</div>';
  domString += '<div class="bioDiv row justify-content-sm-center align-items-center">';
  domString += '<img id="bioPic2" class="order-sm-last col-12 col-sm-5 offset-sm-1 col-lg-5" src="../assets/pictures/ggj2.png" alt="Global Game Jam 2018">';
  domString += '<p class="bioBit2 order-sm-first col-12 col-sm-5 col-lg-5"> I’ve also had a love of ';
  domString += 'console and PC games since I can remember. Creating fun interactive video games has been a big dream of mine. I had a small taste at Global Game Jam 2018 helping create ';
  domString += 'a VR game and have had an itch ever since. I have created a few simple games on Unity as well as experimented with mobile games using Swift. Regardless of my professional life, ';
  domString += 'I will always be fiddling around with video games, and who knows maybe that might take me somewhere as well!';
  domString += '</p>';
  domString += '</div>';
  domString += '<div class="bioDiv row justify-content-sm-center align-items-center">';
  domString += '<a id="navToProj" data-page="projectsPage" class="navLink col-12 col-md-4">Checkout my projects!</a>';
  domString += '</div>';
  util.printToDom('bioPage', domString);
};

export default { buildBioPage };
    