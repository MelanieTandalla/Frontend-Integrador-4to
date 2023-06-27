import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminModel, CreateAdminModelDto, UpdateAdminModelDto } from '../entities/admin.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class adminService {

  readonly API_URL = 'http://localhost:3000/api/v1/admin';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<AdminModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<AdminModel[]>(url);
  }

  getOne(id: AdminModel['id_admin']): Observable<AdminModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<AdminModel>(url);
  }

  store(admin: CreateAdminModelDto): Observable<AdminModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<AdminModel>(url, admin  );
  }

  update(id: AdminModel['id_admin'],admin: UpdateAdminModelDto): Observable<AdminModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<AdminModel>(url, admin);
  }

  destroy(id: AdminModel['id_admin']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
