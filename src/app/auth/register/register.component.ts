import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CreateAdminModelDto } from 'src/app/entities/admin.model';
import { adminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  passwordCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/),
  ]);

  nombreCtrl= new FormControl('',[
    Validators.required, 
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/),
  ]);

  apellidoCtrl= new FormControl('',[
    Validators.required,
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
  ]);

  emailCtrl= new FormControl('',[
    Validators.required,
    Validators.email
  ]);




  form:any;

  constructor(private adminService: adminService){}

  Createadmin: CreateAdminModelDto={
    name: '',
    lastname: '',
    phone: 0,
    email: '',
    password: '',

  }

  registerAdmin(Createadmin: CreateAdminModelDto) {
    console.log(Createadmin)
    const response = this.adminService.
    store(Createadmin)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
