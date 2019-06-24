let navLinks = document.getElementsByClassName("navLink");
const bioPage = document.getElementById("bioPage");
const techPage = document.getElementById("technologiesPage");
const projPage = document.getElementById("projectsPage");

/////////////////////////////////////////////
/////////////////FUNCTIONS///////////////////
/////////////////////////////////////////////


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

export default { eventListeners, showBioPage };
