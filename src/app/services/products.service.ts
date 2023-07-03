import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsModel, CreateProductDto , UpdateProductDto} from '../entities/products.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly API_URL = 'http://localhost:3000/api/v1/product';
  constructor(private httpClient: HttpClient) { }
  
  getAllProducts(): Observable<ProductsModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ProductsModel[]>(url);
  }

  getOneProducts(id: ProductsModel['id_product']): Observable<ProductsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ProductsModel>(url);
  }

  createProducts({category, ...productData}:CreateProductDto): Observable<ProductsModel> {
    const product = {
      ...productData, 
      category:{
        name_category: category
      }
    }
    const url = `${this.API_URL}`;
    return this.httpClient.post<ProductsModel>(url, product);
  }

  updateProducts(id: ProductsModel['id_product'],product: UpdateProductDto): Observable<ProductsModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<ProductsModel>(url, product);
  }

  destroyProducts(id: ProductsModel['id_product']):Observable<boolean>  {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => { return response.rta })
    );
  }
}
