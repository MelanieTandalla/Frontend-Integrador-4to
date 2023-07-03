import { Component } from '@angular/core';
import { AdminModel } from 'src/app/entities/admin.model';
import { adminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
