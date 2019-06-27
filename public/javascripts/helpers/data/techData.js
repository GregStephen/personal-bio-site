import apiKeys from '../apiKeys.js';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/tech.json`)
  .then((resp) => {
    const techResults = resp.data;
    const techArray = [];
    Object.keys(techResults).forEach((techId) => {
      techResults[techId].id = techId;
      techArray.push(techResults[techId]);
    });
    resolve(techArray);
  })
  .catch(err => reject(err));
});

export default { getTech };