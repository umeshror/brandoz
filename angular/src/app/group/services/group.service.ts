import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Group} from '../group.model';
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  API_URL = 'http://localhost/api';

  constructor(private http: HttpClient) {
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.API_URL}/group/`);
  }
}
