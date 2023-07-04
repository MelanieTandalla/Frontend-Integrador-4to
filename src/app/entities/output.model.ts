import { ProductsModel } from "./products.model";

export interface OutputModel{
  id_output: number,
  id_product: ProductsModel,
  name_product: string,
  date_output: Date,
  outgoing_amount: number,
  
}

export interface CreateOutputModelDto extends Omit<OutputModel,'id_output'|'name_product'|'id_product'>{
  id_product: number,
}

export interface UpdateOutputModelDto extends Partial<OutputModel> {

}
