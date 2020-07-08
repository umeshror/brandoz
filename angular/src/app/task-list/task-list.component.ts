import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TaskService} from './services/task.service';
import {Task} from './task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

}
