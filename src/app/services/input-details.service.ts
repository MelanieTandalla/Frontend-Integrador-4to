import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateInputDetailsModelDto, InputDetailsModel, UpdateInputDetailsModelDto } from '../entities/input-details.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputDetailsService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<InputDetailsModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<InputDetailsModel[]>(url);
  }

  getOne(id: InputDetailsModel['id_inputdetails']): Observable<InputDetailsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<InputDetailsModel>(url);
  }

  store(InputDetails: CreateInputDetailsModelDto): Observable<InputDetailsModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<InputDetailsModel>(url, InputDetails  );
  }

  update(id: InputDetailsModel['id_inputdetails'],InputDetails: UpdateInputDetailsModelDto): Observable<InputDetailsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<InputDetailsModel>(url, InputDetails);
  }

  destroy(id: InputDetailsModel['id_inputdetails']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
