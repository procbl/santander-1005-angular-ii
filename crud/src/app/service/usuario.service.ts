import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

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

  criarUsuario(usuario: Usuario): Observable<any>  {
    return this.http.post('http://localhost:3000/usuarios', usuario)
  }

  editarUsuario(usuario: Usuario): Observable<any>  {
    return this.http.put(`http://localhost:3000/usuarios/${usuario.id}`, usuario)
  }

  excluirUsuario(usuario: Usuario): Observable<any>  {
    return this.http.delete(`http://localhost:3000/usuarios/${usuario.id}`)
  }

}
