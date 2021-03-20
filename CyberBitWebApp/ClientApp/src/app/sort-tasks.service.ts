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
      if (taskDate == dateNow) {
        displayTask.OnTimeTaks.push(task);
      }
      else if (taskDate > dateNow) {
        displayTask.lateTasks.push(task);
      }
      else {
        displayTask.doneTasks.push(task)
      }
    }
    return displayTask;
  }
}
