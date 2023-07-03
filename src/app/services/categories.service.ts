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

  readonly API_URL = 'http://localhost:3000/api/v1/category';
  constructor(private httpClient: HttpClient) { }
  
  getAllCategories(): Observable<CategoriesModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<CategoriesModel[]>(url);
  }

  getOneCategories(id: CategoriesModel['id_category']): Observable<CategoriesModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<CategoriesModel>(url);
  }

  createCategories(category: CreateCategoriesModelDto): Observable<CreateCategoriesModelDto> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<CreateCategoriesModelDto>(url, category);
  }

  updateCategories(id:CategoriesModel['id_category'], categories: UpdateCategoriesModelDto) {
    console.log(categories)
    const category= {name_category:categories.name_category, description:categories.description}
    const url = `${this.API_URL}/${id}`
    return this.httpClient.patch(url, category);
  }

  destroyCategories(id: CategoriesModel['id_category']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}