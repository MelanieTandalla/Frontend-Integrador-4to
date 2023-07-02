import { CategoriesModel } from "./categories.model";

export interface ProductsModel { 
  id_product: number,
  name_product: string,
  description: string,
  id_category: number,
  unit_price: number,
  quantity_available: number, //cantidad disponible
  minimum_amount: number, //cantidad minima
  unit_box: boolean,
  stock: boolean
}

export interface CreateProductDto extends Omit<ProductsModel,'id' | 'category'>{
  id_category: number
}

export interface UpdateProductDto extends Partial<ProductsModel> {
  id_category?:number;
}