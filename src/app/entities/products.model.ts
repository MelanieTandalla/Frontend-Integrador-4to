import { CategoriesModel } from "./categories.model";

export interface ProductsModel { 
  id_products: number,
  name_product: string,
  description: string,
  id_category: number,
  unit_price: number,
  quantity_available: number, //cantidad disponible
  minimum_amount: number, //cantidad minima
  stock: number
}

export interface CreateProductModelDto extends Omit<ProductsModel,'id' | 'category'>{
  id_category: number
}

export interface UpdateProductModelDto extends Partial<ProductsModel> {
  id_category?:number;
}