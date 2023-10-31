import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
  private teste = 0;

  constructor(private http: HttpClient) {}

  setTeste() {
    this.teste++
  }

  getTeste() {
    return this.teste
  }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios')
  }

}
