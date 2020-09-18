import projects from '../helpers/data/projectsArray';

const projectDisplay = () => {
  projects.getProjects().forEach((project) => {
    if (project.available === true) {
      $('#projects')
        .prepend(`<div class="card projectCard container-fluid" style="width: 18rem;">
      <div class="img-container-${project.id}">
      </div>
          <div class="card-body">
            <h4 class="card-title push">${project.title}</h4>
            <p class="card-text push">${project.description}</p>
            <a href="${project.url}" id="liveDemo" class="btn btn-outline-primary push">View Live Demo</a>
            <a href="${project.githubUrl}" class="btn btn-outline-info push">Github</a>
            <div class="techSection">
            <h5 class="techCard">Technology Used</h5>
            <p class="card-text">${project.technologiesUsed}</p>
            </div>
            <p class="date"><em>${project.date}</em></p>
          </div>
        </div>`);
    }
  });
};

export default { projectDisplay };
