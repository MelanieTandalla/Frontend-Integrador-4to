import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProvidersModel, CreateProvidersModelDto, UpdateProvidersModelDto } from '../entities/providers.model';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoriesModel, CreateCategoriesModelDto, UpdateCategoriesModelDto } from '../entities/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  
  getAllCategories(): Observable<CategoriesModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<CategoriesModel[]>(url);
  }

  getOneCategories(id: CategoriesModel['id_category']): Observable<CategoriesModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<CategoriesModel>(url);
  }

  createCategories(categories: CreateCategoriesModelDto): Observable<CategoriesModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<CategoriesModel>(url, categories  );
  }

  updateCategories(id: CategoriesModel['id_category'], categories: UpdateCategoriesModelDto): Observable<CategoriesModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<CategoriesModel>(url, categories);
  }

  destroyCategories(id: CategoriesModel['id_category']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}