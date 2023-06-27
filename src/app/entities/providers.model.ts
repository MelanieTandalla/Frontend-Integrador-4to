export interface ProvidersModel { 
  id_providers: number,
  name_provider: string,
  direction: string,
  phone: number
}

export interface CreateProvidersModelDto extends Omit<ProvidersModel,'id_providers'>{

}

export interface UpdateProvidersModelDto extends Partial<ProvidersModel> {

}
