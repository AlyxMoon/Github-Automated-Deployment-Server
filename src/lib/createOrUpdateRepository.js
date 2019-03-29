const fs = require('fs').promises
const { exec } = require('child_process')
const { WEB_DIRECTORY } = require('../../config').server

// Input: The 'repository' field of the Github webhooks
// Checks whether or not the given repository exists on the server already
// If it does not, will create and initialize it
// If it does, will update the code from Github
// Then, will run a provided file in the repository (.alyxci) to take care of things such as restarting the app
const createOrUpdateRepository = (repositoryInfo) => {
  fs.readdir(WEB_DIRECTORY)
    .then(files => files.includes(repositoryInfo.name) ? updateRepository(repositoryInfo) : createRepository(repositoryInfo))
    .then(() => runRepositoryExecFile(repositoryInfo) )
    .catch(error => console.error(`ERROR: ${error.message}`) )
}

const createRepository = repositoryInfo => {
  return new Promise((resolve, reject) => {
    exec(`git clone ${repositoryInfo.clone_url}`, { cwd: WEB_DIRECTORY }, (error) => {
      if (error) return reject(error)
      return resolve()
    })
  })
}

const updateRepository = repositoryInfo => {
  return new Promise((resolve, reject) => {
    exec(`git pull`, { cwd: `${WEB_DIRECTORY}/${repositoryInfo.name}` }, (error) => {
      if (error) return reject(error)
      return resolve()
    })
  })
}

const runRepositoryExecFile = repositoryInfo => {
  return new Promise((resolve, reject) => {
    exec(`sh .alyxci.sh`, { cwd: `${WEB_DIRECTORY}/${repositoryInfo.name}` }, (error) => {
      if (error) return reject(error)
      return resolve()
    })
  })
}

module.exports = createOrUpdateRepository
