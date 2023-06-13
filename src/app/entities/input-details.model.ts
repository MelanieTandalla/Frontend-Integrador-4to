import { InputModel } from "./input.model";

export interface InputDetailsModel {
  id_inputdetails: number,
  id_product: number,
  incoming_quantity: number,
  Image: string[],
  input: InputModel,
}

export interface CreateInputDetailsModelDto extends Omit<InputDetailsModel,'id'>{

}

export interface UpdateInputDetailsModelDto extends Partial<InputDetailsModel> {

}
