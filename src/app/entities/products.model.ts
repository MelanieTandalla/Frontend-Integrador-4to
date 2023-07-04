import { CategoriesModel } from "./categories.model";

export interface ProductsModel { 
  id_product: number,
  name_product: string,
  description: string,
  category: CategoriesModel,
  name_category: number,
  unit_price: number,
  quantity_available: number, //cantidad disponibl/cantidad minima
  until_box: boolean,
}

export interface CreateProductDto extends Omit<ProductsModel,'id_product'|'category'|'name_category'>{
  category: string
}

export interface UpdateProductDto extends Omit<ProductsModel, 'category'| 'name_category'> {
  category:number;
  name_category: string
}