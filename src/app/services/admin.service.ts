import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminModel, CreateProvidersModelDto, UpdateProvidersModelDto } from '../entities/Admin.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<AdminModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<AdminModel[]>(url);
  }

  getOne(id: AdminModel['id_Admin']): Observable<AdminModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<AdminModel>(url);
  }

  store(providers: CreateProvidersModelDto): Observable<AdminModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<AdminModel>(url, providers  );
  }

  update(id: AdminModel['id_Admin'],providers: UpdateProvidersModelDto): Observable<AdminModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<AdminModel>(url, providers);
  }

  destroy(id: AdminModel['id_Admin']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
