const db = require('./db/models')

function getTasksPromise() {
  db.Task.findAll()
    .then(tasks => {
      tasks.forEach(task => {
        console.log(task.taskName)
      })
    })
    .catch(err => {
      console.log(err)
    })
}

async function getTasksAsync() {
  try {
    const tasks = await db.Task.findAll()
    tasks.forEach(task => {
      console.log(task.taskName)
    })
  } catch (err) {
    console.log(err)
  }
}

getTasksPromise()
getTasksAsync()