import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "/auth"

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

  signup(name: string, email: string, password: string) {
    console.log("Payload enviado para a API:", name, email, password);

    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(
      tap({
        next: (response) => {
          sessionStorage.setItem("auth-token", response.token);
          sessionStorage.setItem("username", response.name);
        },
        error: (errorResponse) => {
          console.error("Erro no servidor ao tentar registrar usuário:", errorResponse);
        }
      })
    )
  }
}
