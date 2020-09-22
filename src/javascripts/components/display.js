const projectDisplay = (projectObject) => {
  const domString = `<div class="card projectCard container-fluid" style="width: 18rem;">
      <div class="img-container-${projectObject.id}">
      </div>
          <div class="card-body">
            <h4 class="card-title push">${projectObject.title}</h4>
            <p class="card-text push">${projectObject.description}</p>
            <a href="${projectObject.url}" id="liveDemo" class="btn btn-outline-primary push">View Live Demo</a>
            <a href="${projectObject.githubUrl}" class="btn btn-outline-info push">Github</a>
            <div class="techSection">
            <h5 class="techCard">Technology Used</h5>
            <p class="card-text">${projectObject.technologiesUsed}</p>
            </div>
            <p class="date"><em>${projectObject.date}</em></p>
          </div>
        </div>`;
  return domString;
};

export default { projectDisplay };
