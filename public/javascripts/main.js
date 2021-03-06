import apiKeys from './helpers/apiKeys.js';
import navBar from './components/Navbar/Navbar.js';
import projectPage from './components/Projects/Projects.js';
import bioPage from './components/Bio/Bio.js';
import techPage from './components/Tech/Tech.js';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  navBar.buildNavbar();
  bioPage.buildBioPage();
  projectPage.createProjectCards();
  techPage.createTechPage();
};

init();