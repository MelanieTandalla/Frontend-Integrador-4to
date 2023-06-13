export interface CategoriesModel{
  id_category: number,
  name: string,
  descripcion: string
}


export interface CreateCategoriesModelDto extends Omit<CategoriesModel,'id'>{

}

export interface UpdateCategoriesModelDto extends Partial<CategoriesModel> {

}
