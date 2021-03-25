import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { DisplayTask } from './models/DisplayTask';

@Injectable({
  providedIn: 'root'
})
export class SortTasksService {

  constructor() { }

  getSortedTasks(tasks: Task[]): DisplayTask {
    let displayTask = new DisplayTask();
    const dateNow = new Date();
    dateNow.setHours(0, 0, 0);
    for (let index = 0; index < tasks.length; index++) {
      const task = tasks[index];
      let taskDate = new Date(task.dueDate);
      taskDate.setHours(0,0,0);
      if (taskDate.toString() === dateNow.toString()) {
        displayTask.OnTimeTasks.push(task);
      }
      else if (taskDate.toString() > dateNow.toString()) {
        displayTask.lateTasks.push(task);
      }
      else {
        displayTask.doneTasks.push(task)
      }
    }
    return displayTask;
  }
}
