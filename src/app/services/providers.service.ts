import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProvidersModel, CreateProvidersModelDto, UpdateProvidersModelDto } from '../entities/providers.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  readonly API_URL = 'http://localhost:3000/api/v1/provider';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<ProvidersModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProvidersModel[]>(url);
  }

  getOne(id: ProvidersModel['id_provider']): Observable<ProvidersModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProvidersModel>(url);
  }

  store(providers: CreateProvidersModelDto): Observable<ProvidersModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProvidersModel>(url, providers  );
  }

  update(id: ProvidersModel['id_provider'],providers: UpdateProvidersModelDto): Observable<ProvidersModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProvidersModel>(url, providers);
  }

  destroy(id: ProvidersModel['id_provider']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
