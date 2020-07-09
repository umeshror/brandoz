import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  API_URL = 'http://localhost/api';

  constructor(private http: HttpClient) {
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/task/`);
  }

  public postTask(newTask: Task) {
    return this.http.post(`${this.API_URL}/task/`, newTask);
  }

  // Update a Task.
  public putTask(task: Task) {
    console.log(task)
    return this.http.put(`${this.API_URL}/task/${task.id}/`, task);
  }

  // Delete a Task.
  public deleteTask(id: number) {
    return this.http.delete(`${this.API_URL}/task/${id}/`);
  }
}
