export interface ProvidersModel { 
  id_provider?: number,
  name_provider: string,
  direction: string,
  telephone: string
}

export interface CreateProvidersModelDto extends Omit<ProvidersModel,'id_providers'>{

}

export interface UpdateProvidersModelDto extends Partial<ProvidersModel> {

}
