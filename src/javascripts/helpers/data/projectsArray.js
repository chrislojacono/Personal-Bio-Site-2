const projects = [
  {
    title: 'Adoption Website',
    screenshot: '../images/adoption.jpg',
    description: 'A small design to test event listeners',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github, Event Listeners',
    available: true,
    url: 'https://practical-heyrovsky-fba724.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/pet-adoption',
  },
  {
    title: 'NSS Pie Shop',
    screenshot: '../images/pie.png',
    description: 'A small design to test bootstrap/event listeners',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Bootstrap, Event Listeners',
    available: true,
    url: 'https://nsspieshop.netlify.app',
    githubUrl: 'https://github.com/chrislojacono/Event-Listeners',
  },
  {
    title: 'Sorting Hat',
    screenshot: '../images/SortingHat.png',
    description:
      'A project to test event listeners and Javascript functionality with user input fields',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Bootstrap 4, Event Listeners',
    available: true,
    url: 'https://sortinghatcl.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Sorting-Hat',
  },
  {
    title: 'Bear Watcher',
    screenshot: '../images/bearWatcher.png',
    description:
      'The point of this assignment was to test our ability on using jQuery and modules in a program instead of running everything out of a single JS page like we had done in the past.',
    technologiesUsed: 'Vanilla Javascript ES6, JQuery, HTML5, CSS3 and Modules',
    available: true,
    url: 'https://bear-watcher.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Bear-Watcher',
  },
  {
    title: 'Pants Store Group Project',
    screenshot: '../images/pants.png',
    description:
      'We wanted to incorporate the use of wireframes, github project boards and the process of assigning and completing issue tickets',
    technologiesUsed: 'Vanilla Javascript ES6, HTML5, CSS3',
    available: true,
    url: 'https://extraordinarycorduroy.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/pants-group-project-e13-mighty-megalodons-team-4',
  },
  {
    title: 'Dino Kennel Milestone Project',
    screenshot: '../images/dinoKennel.png',
    description:
      // eslint-disable-next-line max-len
      'The motivation was for us to showcase all the skills we had learned with Vanilla Javascript up until this point. We had to do the whole project solo and incorporate all the things we had learned.',
    technologiesUsed: 'Javascript ES6, JQuery, HTML5, CSS3 and Modules',
    available: true,
    url: 'https://dino-kennelcl.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Dino-Kennel-Milestone-1',
  },
  {
    title: 'Chatty Group Project',
    screenshot: '../images/parksAndRec.png',
    description:
      'This was a group project to build a chat room with multiple users, emojis, a giphy API, local storage, and chat bots.',
    technologiesUsed: 'Javascript ES6, JQuery, HTML5, SASS, And a Webpack with Modules, giphy API',
    available: true,
    url: 'https://dino-kennelcl.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Dino-Kennel-Milestone-1',
  },
];

const getProjects = () => projects;

export default { getProjects };
