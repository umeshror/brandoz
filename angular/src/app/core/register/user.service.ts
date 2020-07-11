import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  register(user) {
    return this.http.post(`${environment.apiUrl}/api/user-create/`, user);
  }

}
