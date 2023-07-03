import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminModel, CreateAdminModelDto } from '../entities/admin.model';

export interface LoginCredentials {
  gmail: string;
  password: string;
}

interface LoginResponse {
  user: AdminModel;
  authorized: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly API_URL: string = 'http://localhost:3000/api/v1/auth';

  constructor(private httpClient: HttpClient) { 
  }

  logIn(credentials: LoginCredentials) {
    return this.httpClient.post<LoginResponse>(this.API_URL.concat('/login'), credentials);
  }

  register(credentials: CreateAdminModelDto) {
    return this.httpClient.post<AdminModel>(this.API_URL.concat('/register'), credentials);
  }
}
