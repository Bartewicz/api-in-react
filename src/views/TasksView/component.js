import React from 'react'

const TasksAssingedToMe = ({ data }) => {
  return (
    <div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>title</th>
            <th>creator</th>
            <th>status</th>
            <th>assignee</th>
            <th>hours</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, key) => {
            return (
              <tr key={key}>
                <td>{task.title}</td>
                <td>{task.creator}</td>
                <td>{task.status}</td>
                <td>{task.assignee}</td>
                <td>{JSON.stringify(task.hours)}</td>
                <td><button>akcja</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* <ul>
        {data.map((task, key) => {
          return <li key={key}>{JSON.stringify(task)}</li>
        })}
      </ul> */}
    </div>
  )
}

export default TasksAssingedToMe