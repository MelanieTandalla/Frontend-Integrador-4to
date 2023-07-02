export interface AdminModel{
  id_admin: number,
  name_admin: string,
  last_name: string,
  telephone: number,
  gmail: string,
  password: string,
}

export interface CreateAdminModelDto extends Omit<AdminModel,'id_admin'>{

}

export interface UpdateAdminModelDto extends Partial<AdminModel> {

}
