import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  

  constructor(private http: HttpClient) {}

  getTimes(): Observable<any> {
    return this.http.get('http://localhost:3000/times')
  }

  criarTime(time: any): Observable<any>  {
    return this.http.post('http://localhost:3000/times', time)
  }

  editarTime(time: any): Observable<any>  {
    return this.http.put(`http://localhost:3000/times/${time.id}`, time)
  }

  excluirTime(time: any): Observable<any>  {
    return this.http.delete(`http://localhost:3000/times/${time.id}`)
  }

}
