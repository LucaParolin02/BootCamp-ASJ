import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usuario: any = {
    name: '',
    id: -1,
    job: ''
  }

  constructor(private http: HttpClient) { }

  url = 'https://reqres.in/api/users';

  //GET - READ
  public getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  //POST
  public createUser(usuario:any): Observable<any>{
    return this.http.post(this.url, usuario)
  }

  public delete(id:any): Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }
}
