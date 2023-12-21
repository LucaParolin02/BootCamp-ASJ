import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoryInterface } from '../interfaces/categoryInterface';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private http: HttpClient) { }

  URL_API: string = "https://api.escuelajs.co/api/v1/categories";

  public getAll():Observable<any>{
      return this.http.get(this.URL_API);
  }
  
  public getById(id: number): Observable<categoryInterface> {
    return this.http.get<categoryInterface>(this.URL_API + "/" + id);
  }
}
