import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioTresService {

  constructor(private http: HttpClient) { }

  public getDataAPI() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=42');
  }

  public getPersonajeAPI(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
