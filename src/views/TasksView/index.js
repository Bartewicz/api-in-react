import React, { Component } from 'react'

// import tasks methods from api
import { getTasksCreatedBy, getTasksAssignedTo } from '../../api/tasks.api'

class TasksView extends Component {
  state = {
    imBusy: true,
    tasksAssignedToMe: [],
    tasksCreatedbyMe: []
  }

  componentDidMount() {

    Promise.all([
      getTasksAssignedTo('Bartek'),
      getTasksCreatedBy('bartek0402@gmail.com')
    ]).then((data) => {

      const [tasksCreatedbyMe, tasksAssignedToMe] = data

      console.log('tasks data', tasksCreatedbyMe, tasksAssignedToMe)
    })


  }

  render() {
    return (
      <div>
        <h2>Tasks View</h2>
      </div>
    )
  }
}

export default TasksView