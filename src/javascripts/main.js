import '../styles/main.scss';
import display from './components/axiosDisplay';

const init = () => {
  display.projectsView();
  $('#popover').popover();
};

init();
