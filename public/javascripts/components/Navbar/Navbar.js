import util from "../../helpers/util.js";

const pages = $('.fullPage');
// const navLinks = $('.navLink');

const eventListeners = () => {
  $('#navbar').on('click', '.navLink', (e) => {
    const target = $(e.currentTarget);
    $('.navLink').removeClass('selected-nav');
    target.addClass('selected-nav');
    const pageToLoad = (target.data('page'));
    pages.addClass('hide');
    $(`#${pageToLoad}`).removeClass('hide');
  });
  $('#bioPage').on('click', '.navLink', (e) => {
    const target = $(e.target);
    $('.navLink').removeClass('selected-nav');
    $('#navToProjects').addClass('selected-nav');
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
  domstring += '<li><a class="navLink selected-nav" data-page="bioPage" id="navToBio"> <i class="fas fa-user"></i> Bio</a></li>';
  domstring += '<li><a class="navLink" data-page="technologiesPage" id="navToTechnologies"><span class="fas fa-file-code"></span> Technologies</a></li>';
  domstring += '<li><a class="navLink" data-page="projectsPage" id="navToProjects"><span class="fas fa-cogs"></span> Projects</a></li>';
  domstring += '</ul>';
  domstring += '</div>';
  util.printToDom('navbar', domstring);
  eventListeners();
};

export default { eventListeners, buildNavbar };
