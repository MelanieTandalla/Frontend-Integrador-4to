import { Component } from '@angular/core';
import { AuthService, LoginCredentials } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private readonly authService: AuthService) { }

  credentials: LoginCredentials = {
    gmail: '',
    password: '',
  }

  login() {
    console.log(this.credentials)
    this.authService.logIn(this.credentials).subscribe(res => {
      console.log(res)
      if(!res.authorized) throw new Error('Email or password incorrect');
      localStorage.setItem('user', JSON.stringify(res.user))
      window.location.href = '/dashboard'
    })
  }

}
