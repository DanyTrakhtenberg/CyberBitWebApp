import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css']
})
export class EnterTaskComponent implements OnInit {
  @Output() notifyTask: EventEmitter<Task> = new EventEmitter();

  task:Task;
  constructor() { 
    this.task = new Task();
  }

  ngOnInit() {
  }
  addTask():void{
    this.notifyTask.emit(this.task);

  }

}
