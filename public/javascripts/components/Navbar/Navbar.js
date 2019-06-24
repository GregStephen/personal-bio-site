import util from "../../helpers/util.js";

const pages = $('.fullPage');

const eventListeners = () => {
  $('#navbar').on('click', '.navLink', (e) => {
    const target = $(e.target);
    const pageToLoad = (target.data('page'));
    pages.addClass('hide');
    $(`#${pageToLoad}`).removeClass('hide');
  });
  $('#bioPage').on('click', '.navLink', (e) => {
    const target = $(e.target);
    const pageToLoad = (target.data('page'));
    pages.addClass('hide');
    $(`#${pageToLoad}`).removeClass('hide');
    scroll(0,0);
  });
};

const buildNavbar = () => {
  let domstring = '';
  domstring += '<h2 id="myName">Greg Stephen</h2>';
  domstring += '<hr>';
  domstring += '<div class="navigationList">';
  domstring += '<ul id="navLinks">';
  domstring += '<li><a class="navLink" data-page="bioPage" id="navToBio"> <span class="fas fa-user"></span> Bio</a></li>';
  domstring += '<li><a class="navLink" data-page="technologiesPage" id="navToTechnologies"><span class="fas fa-file-code"></span> Technologies</a></li>';
  domstring += '<li><a class="navLink" data-page="projectsPage" id="navToProjects"><span class="fas fa-cogs"></span> Projects</a></li>';
  domstring += '</ul>';
  domstring += '</div>';
  util.printToDom('navbar', domstring);
  eventListeners();
};

export default { eventListeners, buildNavbar };
