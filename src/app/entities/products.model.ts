import { CategoriesModel } from "./categories.model";

export interface ProductsModel { 
  id_products: number,
  id_category: CategoriesModel,
  name_product: string,
  description: string,
  unit_price: number,
  quantity_available: number, //cantidad disponible
  minimum_amount: number, //cantidad minima
  stock: number
}

export interface CreateProductModelDto extends Omit<ProductsModel,'id' | 'category'>{
  categoryId:number; 
}

export interface UpdateProductModelDto extends Partial<ProductsModel> {
  categoryId?:number;
}