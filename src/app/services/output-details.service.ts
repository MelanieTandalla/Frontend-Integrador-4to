import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateOutputModelDto, OutputModel, UpdateOutputModelDto } from '../entities/output.model';

@Injectable({
  providedIn: 'root'
})
export class OutputDetailsService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<OutputModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<OutputModel[]>(url);
  }

  getOne(id: OutputModel['id_output']): Observable<OutputModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<OutputModel>(url);
  }

  store(InputDetails: CreateOutputModelDto): Observable<OutputModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<OutputModel>(url, InputDetails  );
  }

  update(id: OutputModel['id_output'],InputDetails: UpdateOutputModelDto): Observable<OutputModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<OutputModel>(url, InputDetails);
  }

  destroy(id: OutputModel['id_output']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
