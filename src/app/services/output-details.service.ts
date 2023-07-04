import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateOutputModelDto, OutputModel, UpdateOutputModelDto } from '../entities/output.model';

@Injectable({
  providedIn: 'root'
})
export class OutputDetailsService {
  readonly API_URL = 'http://localhost:3000/api/v1/output';
  constructor(private httpClient: HttpClient) { }

  getAllOutput(): Observable<OutputModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<OutputModel[]>(url);
  }

  getOneOutput(id: OutputModel['id_output']): Observable<OutputModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<OutputModel>(url);
  }

  createOuput({ id_product, ...outputData }: CreateOutputModelDto): Observable<OutputModel> {
    const output = {
      ...outputData,
      id_product: {
        name_product: id_product
      }
    }
    const url = `${this.API_URL}`;
    return this.httpClient.post<OutputModel>(url, output);
  }

  updateOutput(id: OutputModel['id_output'], OutputDetails: UpdateOutputModelDto): Observable<OutputModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<OutputModel>(url, OutputDetails);
  }

  destroyOutput(id: OutputModel['id_output']): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
