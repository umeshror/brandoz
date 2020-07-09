import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from './services/task.service';
import {Task} from './task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  taskForm: FormGroup;

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getTasks();
    this.taskForm = this.formBuilder.group({
      title: '',
      content: ''
    });

    // Set validators for fields.
    this.taskForm.controls['title'].setValidators([Validators.required]);
    this.taskForm.controls['content'].setValidators([Validators.required]);
  }

  public getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  onSubmit() {
    // Create the Task.
    this.taskService.postTask(this.taskForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      );
  }

  updateTask(task) {
    this.taskService.putTask(task)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      );
  }

}
