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
  const url = `${TASKS_RESOURCE_PATH}/search/creator/${creator}`

  return fetch(url)
    .then(fetchLogger)

}

// --- Getting all tasks created by a specific user ---
export const getTasksAssignedTo = (assignee) => {
  const url = `${TASKS_RESOURCE_PATH}/search/assignee/${assignee}`

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

// --- Change description of a single task ---
export const changeDescriptionOfTask = task_id => {
  const description = prompt('Enter new description')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/change-description`

  const task = {
    description: description
  }
  const fetchConfig = {
    method: "PATCH",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json"
    }
  }

  if (description) {
    return fetch(url, fetchConfig)
      .then(fetchLogger)
  } else {
    return Promise.resolve('')
  }
}

// --- Assign task to a specific user ---
export const changeAsssigneeOfTask = task_id => {
  const assignee = prompt('Who would you like to assign this task')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/assign-to/${assignee}`

  const task = {
    assignee: assignee
  }
  const fetchConfig = {
    method: "PATCH",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json"
    }
  }

  if (assignee) {
    return fetch(url, fetchConfig)
      .then(fetchLogger)
  } else {
    return Promise.resolve('')
  }
}

// --- Change status of a specific task ---
export const changeStatusOfTask = task_id => {
  const status = prompt('Set new status')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/change-status`

  const task = {
    status: status
  }
  const fetchConfig = {
    method: "PATCH",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json"
    }
  }

  if (status) {
    return fetch(url, fetchConfig)
      .then(fetchLogger)
  } else {
    return Promise.resolve('')
  }
}

// --- Assign task to a specific user ---
export const logOursToTask = task_id => {
  const logger = prompt('Who is logging in')

  const hours = prompt('How many hours would you like to login')

  const url = `${TASKS_RESOURCE_PATH}/${task_id}/log-hours`

  const task = {
    logger: logger,
    hours: hours
  }
  const fetchConfig = {
    method: "PATCH",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json"
    }
  }

  if (logger && hours > 0) {
    return fetch(url, fetchConfig)
      .then(fetchLogger)
  } else {
    return Promise.resolve('')
  }
}
