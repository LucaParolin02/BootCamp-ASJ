import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { list } from '../interfaces/list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUnoService {
  private apiUrl = 'http://localhost:8080/tareas';
  constructor(private http: HttpClient) { }

  public getList(){
    return this.http.get<list[]>(`${this.apiUrl}`);
  }

  public getEliminadas(): Observable<list[]> {
    return this.http.get<list[]>(`${this.apiUrl}/eliminadas`);
}

  public getTareaByID(id: number): Observable<list> {
    return this.http.get<list>(`${this.apiUrl}/${id}`);
  }

  public deleteTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  public updateTarea(tarea: list): Observable<list> {
    return this.http.put<list>(`${this.apiUrl}/${tarea.id}`, tarea);
  }

  public addTarea(tarea: list): Observable<list> {
    return this.http.post<list>(`${this.apiUrl}`, tarea);
  }

}
