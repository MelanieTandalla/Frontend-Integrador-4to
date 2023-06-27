import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { FormControl, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule 

  ]
})
export class AuthModule { }
