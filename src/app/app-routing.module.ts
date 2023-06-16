import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NoFoundPageComponent } from './noFoundPage/no-found-page.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';

const routes:Routes = [

  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NoFoundPageComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
