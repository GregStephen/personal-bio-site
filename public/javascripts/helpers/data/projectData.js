import apiKeys from '../apiKeys.js';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
  .then((resp) => {
    const projectResults = resp.data;
    const projects = [];
    Object.keys(projectResults).forEach((projectId) => {
      projectResults[projectId].id = projectId;
      projects.push(projectResults[projectId]);
    });
    resolve(projects);
  })
  .catch(err => reject(err));
});

export default { getProjects };
