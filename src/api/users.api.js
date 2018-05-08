import { fetchLogger } from './utils.api'

const USERS_RESOURCE_PATH = 'https://tasks.isa.valuepoint.pl/users'

const MY_NICKNAME = 'Bartek'
const MY_ID = '5aeffed76f78ba537f03ade4'

// ### Getting users data from server using fetch ###
export const getAllUsers = () => fetch(`${USERS_RESOURCE_PATH}`)
  .then(fetchLogger)
  .then(data => console.log('getAllUsers', data))

// getAllUsers()

const getMyUser = (id) => fetch(`${USERS_RESOURCE_PATH}/${id}`)
  .then(fetchLogger)
  .then(data => console.log('getMyUser', data))

// getMyUser(My_id)
