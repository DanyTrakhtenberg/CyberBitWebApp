import { Component, Inject } from '@angular/core';
import { User } from '../models/User';
import { Task } from '../models/task';
import { LoginDataService } from '../login-data.service';
import { DisplayTask } from '../models/DisplayTask';
import { SortTasksService } from '../sort-tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  user: User;
  baseUrl: string;
  displayTask:DisplayTask
  constructor(private loginDataService: LoginDataService,private sortTasksService: SortTasksService, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.displayTask = new DisplayTask();
  }

  login(userName: string) {
    this.loginDataService.getUser(userName, this.baseUrl).subscribe(result => {
      this.user = result
      this.displayTask = this.sortTasksService.getSortedTasks(result.tasks);
    });
    
  }

  AddTask(task: Task) {
    task.dueDate = new Date(task.dueDate);
    this.user.tasks.push(task);
      let user = new User();
      user.name= this.user.name;
      user.tasks.push(task);
     this.loginDataService.postTaskToUser(user,this.baseUrl).subscribe();
  }

}
