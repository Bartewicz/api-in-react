import { fetchLogger } from './utils.api'

const TASKS_RESOURCE_PATH = `http://tasks.isa.valuepoint.pl/tasks`

// const MY_NICKNAME = 'Bartek'

// ### Getting tasks data from server using fetch ###

// --- Getting all tasks from server ---
export const getAllTasks = () =>
  fetch(`${TASKS_RESOURCE_PATH}`)
    .then(fetchLogger)

// --- Adding a single task to server ---
export const addTaskToUser = (creator, title) => {
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
}

// --- Getting all tasks created by a specific user ---
export const getTasksCreatedBy = (creator) => {
  const url = `${TASKS_RESOURCE_PATH}/${creator}`

  return fetch(url)
    .then(fetchLogger)

}

// --- Getting all tasks created by a specific user ---
export const getTasksAssignedTo = (assignee) => {
  const url = `${TASKS_RESOURCE_PATH}/${assignee}`

  return fetch(url)
    .then(fetchLogger)

}

export const assignToUser = (id) => {
  const assignee = prompt('Podaj do kogo przypisujesz taska:')

  const url = `${TASKS_RESOURCE_PATH}/${id}/assing-to/${assignee}`

  if (assignee.length) {
    return fetch(url)
      .then(fetchLogger)
  }
}

export const deleteTask = (id) => {
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

}
