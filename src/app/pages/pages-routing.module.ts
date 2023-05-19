import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthModule } from '../auth/auth.module';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  //rutas protegidas

  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path:'product', component: ProductsComponent },
      { path:'', component: DashboardComponent },
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]
  }
  //{path:'**',component:NoFoundComponent},


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
  ]
})
export class PagesRoutingModule { }
