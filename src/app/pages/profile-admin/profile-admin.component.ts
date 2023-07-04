import { Component } from '@angular/core';
import { adminService } from '../../services/admin.service';
import { AdminModel } from '../../entities/admin.model'

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent {

  constructor(private readonly admnservice: adminService) {}

  protected admin: AdminModel = {
    id_admin: 0,
    name_admin: "",
    last_name: "",
    telephone: 0,
    gmail: "",
    password: "",
  }

  getAdmin() {
    const adminId = JSON.parse(localStorage.getItem('user') as string).id_admin;
    this.admnservice.getOne(adminId).subscribe(res => {
      this.admin = res;
    })
  }


  ngOnInit() {
    this.getAdmin()
  }
}