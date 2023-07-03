export interface CategoriesModel{
  id_category?: number,
  name_category: string,
  description: string
}


export interface CreateCategoriesModelDto extends Omit<CategoriesModel,'id_category'>{
  
}

export interface UpdateCategoriesModelDto extends CategoriesModel{
}
