import { ProvidersModel } from "./providers.model";

export interface InputModel{
  id_input: number,
  proveedor: ProvidersModel,
  number_input: number,
  date_reception: Date,
}