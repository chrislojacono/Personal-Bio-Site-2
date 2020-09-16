import projects from '../helpers/data/projectsArray';

const projectDisplay = () => {
  projects.getProjects().forEach((project) => {
    if (project.available === true) {
      $('#projects').prepend(`<div class="card projectCard container-fluid" style="width: 18rem;">
      <div class="img-container-${project.id}">
      </div>
          <div class="card-body">
            <h4 class="card-title push">${project.title}</h4>
            <p class="card-text push">${project.description}</p>
            <a href="${project.url}" class="btn btn-outline-primary push">Deployed Site</a>
            <a href="${project.githubUrl}" class="btn btn-outline-info push">Github</a>
            <div class="techSection">
            <h5 class="techCard">Technology Used</h5>
            <p class="card-text">${project.technologiesUsed}</p>
            </div>
          </div>
        </div>`);
    }
  });
};

export default { projectDisplay };

/* <div class="img-container" style="background-image: url(${project.screenshot})">
</div> */
