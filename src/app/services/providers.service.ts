import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProvidersModel, CreateProvidersModelDto, UpdateProvidersModelDto } from '../entities/providers.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<ProvidersModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProvidersModel[]>(url);
  }

  getOne(id: ProvidersModel['id_providers']): Observable<ProvidersModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProvidersModel>(url);
  }

  store(providers: CreateProvidersModelDto): Observable<ProvidersModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProvidersModel>(url, providers  );
  }

  update(id: ProvidersModel['id_providers'],providers: UpdateProvidersModelDto): Observable<ProvidersModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProvidersModel>(url, providers);
  }

  destroy(id: ProvidersModel['id_providers']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
