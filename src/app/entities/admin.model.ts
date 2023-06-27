export interface AdminModel{
  id_admin: number,
  name: string,
  lastname: string,
  phone: number,
  email: string,
  password: string,
}

export interface CreateAdminModelDto extends Omit<AdminModel,'id_admin'>{

}

export interface UpdateAdminModelDto extends Partial<AdminModel> {

}
