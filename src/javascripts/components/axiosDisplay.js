import projectData from '../helpers/data/projectData';
import card from './display';

const projectsView = () => {
  $('#projects').html('');
  projectData.getProjects().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#projects').prepend(card.projectDisplay(item));
      });
    } else {
      $('#projects').append('<h2>No Projects to display</h2>');
    }
  });
};

export default { projectsView };
