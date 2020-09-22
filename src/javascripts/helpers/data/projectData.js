import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// STUDENTS: Refactor this to use new Promise syntax
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/Projects.json`).then((response) => {
    const projectsData = response.data;
    const projects = [];
    if (projectsData) {
      Object.keys(projectsData).forEach((projectId) => {
        projects.push(projectsData[projectId]);
      });
    }
    resolve(projects);
  }).catch((error) => reject(error));
});

export default { getProjects };
