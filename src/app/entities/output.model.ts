export interface OutputModel{
  id_output: number,
  id_products: number,
  date_output: Date,
  output_quiantity: number,
  
}

export interface CreateOutputModelDto extends Omit<OutputModel,'id'>{

}

export interface UpdateOutputModelDto extends Partial<OutputModel> {

}
