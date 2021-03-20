import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-diplay',
  templateUrl: './task-diplay.component.html',
  styleUrls: ['./task-diplay.component.css']
})
export class TaskDiplayComponent implements OnInit {
  @Input() header:string
  @Input() tasks:Task[];

  constructor() { }

  ngOnInit() {
  }

}
