import {fetchLogger} from './utils.api'

const TASKS_RESOURCE_PATH = `http://tasks.isa.valuepoint.pl/tasks`

// ### Getting tasks data from server using fetch ###
// # Getting all tasks from server #
const getAllTasks = () => fetch(`${TASKS_RESOURCE_PATH}`)
  .then(fetchLogger)
  .then(data => console.log('getAllTasks', data))
// getAllTasks()

// # Adding a single task to server #
const addTaskToUser = (creator, title) => {
  const url = `${TASKS_RESOURCE_PATH}/add`
  const task = {
    creator: creator,
    title: title
  }
  const fetchConfig = {
    method: 'PUT',
     body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json'
    }
  }
  return fetch(url, fetchConfig)
    .then(fetchLogger)
    .then(data => console.log('addTaskToUser', data))
}
// addTaskToUser('bartek0402@gmail.com', 'Sprawdzić przesyłanie informacji do serwera za pomocą fetch')

// # Getting all tasks created by a specific user #
const getTasksCreatedBy = (creator) => {
  const url = `${TASKS_RESOURCE_PATH}/${creator}`

  const tasks = fetch(url)
    .then(fetchLogger)
    .then(tasks => console.log('getTasksCreatedBy', tasks))

  return tasks
}
// getTasksCreatedBy('bartek0402@gmail.com')

// # Getting all tasks created by a specific user #
const getTasksAssignedTo = (assignee) => {
  const url = `${TASKS_RESOURCE_PATH}/${assignee}`

  const tasks = fetch(url)
    .then(fetchLogger)
    .then(tasks => console.log('getTasksAssignedTo', tasks))

  return tasks
}
// getTasksAssignedTo('Bartek')

assignToUser = (id) => {
  const assignee = prompt('Podaj do kogo przypisujesz taska:')

  const url = `${TASKS_RESOURCE_PATH}/${id}/assing-to/${assignee}`

  if (assignee.length) {
    fetch(url)
      .then(fetchLogger)
      .then(data => {
        console.log('Assigned successfully', data)
        alert('Assigned successfully')
      })
  }
}

deleteTask = (id) => {
  const url = `${TASKS_RESOURCE_PATH}/${id}`

  const fetchConfig = {
    method: "DELETE",
    body: {},
    headers: {
      "Content-type": "application/json"
    }
  }

  return fetch(url, fetchConfig)
    .then(fetchLogger)
    .then(data => {
      console.log('Deleted successfully', data)
      alert('Deleted successfully')
    })
}
