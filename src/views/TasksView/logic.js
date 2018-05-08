import { changeAsssigneeOfTask, changeDescriptionOfTask, changeStatusOfTask, logOursToTask } from "../../api/tasks.api";

export const asssignTasksTo = (id, refresh) => {
  changeAsssigneeOfTask(id).then(() =>
    refresh()
  )
}

export const changeDescription = (id, refresh) => {
  changeDescriptionOfTask(id).then(() =>
    refresh()
  )
}

export const changeStatus = (id, refresh) => {
  changeStatusOfTask(id).then(() =>
    refresh()
  )
}

export const logHours = (id, refresh) => {
  logOursToTask(id).then(() =>
    refresh()
  )
}
