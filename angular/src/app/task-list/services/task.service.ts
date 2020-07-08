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
}
