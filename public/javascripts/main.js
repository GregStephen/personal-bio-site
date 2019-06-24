import apiKeys from './helpers/apiKeys.js';
import navBar from './components/Navbar/Navbar.js';
import projectPage from './components/Projects/Projects.js';
import bioPage from './components/Bio/Bio.js';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  navBar.eventListeners();
  bioPage.buildBioPage();
  navBar.showBioPage();
  projectPage.createProjectCards();
};

init();