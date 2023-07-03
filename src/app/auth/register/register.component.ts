import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CreateAdminModelDto } from 'src/app/entities/admin.model';
import { adminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private adminService: adminService,
    private authService: AuthService
  ){}

  Createadmin: CreateAdminModelDto={
    name_admin: '',
    last_name: '',
    telephone: 0,
    gmail: '',
    password: '',

  }

  registerAdmin(Createadmin: CreateAdminModelDto) {
    console.log(Createadmin)
      const response = this.authService.register(Createadmin)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
