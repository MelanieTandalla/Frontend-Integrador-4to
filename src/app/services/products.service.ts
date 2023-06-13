import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsModel, CreateProductModelDto , UpdateProductModelDto} from '../entities/products.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<ProductsModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductsModel[]>(url);
  }

  getOne(id: ProductsModel['id_products']): Observable<ProductsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductsModel>(url);
  }

  create(product: CreateProductModelDto): Observable<ProductsModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductsModel>(url, product);
  }

  update(id: ProductsModel['id_products'],product: UpdateProductModelDto): Observable<ProductsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductsModel>(url, product);
  }

  destroy(id: ProductsModel['id_products']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
