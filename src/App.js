import React, { Component } from 'react'

// Views
import TasksView from './views/TasksView'

import './App.css'
// import { getAllUsers } from './api/users.api'
// import { getAllTasks } from './api/tasks.api'

class App extends Component {
  componentDidMount() {
    // getAllUsers()
    // getAllTasks()
  }

  render() {
    return (
      <div className="App">
        <TasksView />
      </div>
    )
  }
}

export default App