import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3001';


  constructor(private httpClient: HttpClient) { }

  login(nome: string, senha: string) {
    return this.httpClient.post<{ nome: string; email: string }>(
      'http://localhost:3001/login',
      { nome, senha }
    ).pipe(
      tap((value) => {
        sessionStorage.setItem("username", value.nome);
        sessionStorage.setItem("email", value.email);
      })
    );
  }
}
