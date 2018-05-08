import React, { Component } from 'react'

// import tasks methods from api
import { getTasksCreatedBy, getTasksAssignedTo } from '../../api/tasks.api'

import TasksAssingedToMe from './component'

class TasksView extends Component {
  state = {
    imBusy: true,
    tasksAssignedToMe: [],
    tasksCreatedbyMe: []
  }

  refresh() {

    this.setState({
      imBusy: true
    })

    Promise.all([
      getTasksAssignedTo('Bartek'),
      getTasksCreatedBy('bartek0402@gmail.com')
    ]).then((data) => {

      const [tasksCreatedbyMe, tasksAssignedToMe] = data

      console.log('tasks data', tasksCreatedbyMe, tasksAssignedToMe)

      this.setState({
        tasksAssignedToMe,
        tasksCreatedbyMe,
        imBusy: false
      })

    })

  }

  componentDidMount() {

    Promise.all([
      getTasksAssignedTo('Bartek'),
      getTasksCreatedBy('bartek0402@gmail.com')
    ]).then((data) => {

      const [tasksCreatedbyMe, tasksAssignedToMe] = data

      console.log('tasks data', tasksCreatedbyMe, tasksAssignedToMe)

      this.setState({
        tasksAssignedToMe,
        tasksCreatedbyMe,
        imBusy: false
      })

    })

  }

  render() {

    if (this.state.imBusy) {
      return (
        <h2>Hold on there tiger, I'm busy now...</h2>
      )
    }
    return (
      <div>
        <h2>Tasks View</h2>
        <button
          className="btn btn-block btn-warning"
          onClick={() => {
            this.refresh()
          }}>
          Refresh
        </button>
        <TasksAssingedToMe {...this.state.tasksAssignedToMe}
          refresh={() => this.refresh()}
        />

      </div>
    )
  }
}

export default TasksView