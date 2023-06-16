export interface CategoriesModel{
  id_category: number,
  name: string,
  description: string
}


export interface CreateCategoriesModelDto extends Omit<CategoriesModel,'id_category'>{

}

export interface UpdateCategoriesModelDto extends Omit<CategoriesModel,'id_category'>{
  id_category: number
}
