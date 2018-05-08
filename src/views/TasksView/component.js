import React from 'react'
import * as logic from './logic';

const TasksAssingedToMe = ({ data, refresh }) => {
  return (
    <div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">title</th>
            <th className="text-center">description</th>
            <th className="text-center">creator</th>
            <th className="text-center">status</th>
            <th className="text-center">assignee</th>
            <th className="text-center">hours</th>
            <th className="text-center">actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, key) => {
            return (
              <tr key={key}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.creator}</td>
                <td>{task.status}</td>
                <td>{task.assignee}</td>
                <td>{JSON.stringify(task.hours)}</td>

                <td><button
                  className="btn btn-default"
                  onClick={() => logic.asssignTasksTo(task._id, refresh)}
                >
                  Przypisz taska
                </button>

                  <button
                    className="btn btn-default"
                    onClick={() => logic.changeDescription(task._id, refresh)}
                  >
                    Zmień opis
                </button>

                  <button
                    className="btn btn-default"
                    onClick={() => logic.changeStatus(task._id, refresh)}
                  >
                    Zmień status
                </button>

                  <button
                    className="btn btn-default"
                    onClick={() => logic.logHours(task._id, refresh)}
                  >
                    Przypisz czas do taska
                </button></td>
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