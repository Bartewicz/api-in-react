import { fetchLogger } from './utils.api'

const USERS_RESOURCE_PATH = 'https://tasks.isa.valuepoint.pl/users'

// const MY_ID = '5aeffed76f78ba537f03ade4'

// ### Getting users data from server using fetch ###
// --- Getting all users ---
export const getAllUsers = () =>
  fetch(`${USERS_RESOURCE_PATH}`)
    .then(fetchLogger)

// --- Getting a specific user by his id ---
export const getUserById = (id) =>
  fetch(`${USERS_RESOURCE_PATH}/${id}`)
    .then(fetchLogger)
