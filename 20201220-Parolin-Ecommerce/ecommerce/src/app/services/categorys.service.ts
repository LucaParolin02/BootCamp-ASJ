import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private http: HttpClient) { }

  URL_API: string = "https://api.escuelajs.co/api/v1/categories";

  public getAll():Observable<any>{
      return this.http.get(this.URL_API);
  }
  
}
