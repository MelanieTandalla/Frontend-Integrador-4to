import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthModule } from '../auth/auth.module';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { OutputDetailComponent } from './output-detail/output-detail.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { NewCategoriesComponent } from './categories/new-categories/new-categories.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { NewInputDetailsComponent } from './input-detail/new-input-details/new-input-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderComponent } from './provider/provider.component';
import { NewProviderComponent } from './provider/new-provider/new-provider.component';
import { LoginComponent } from '../auth/login/login.component';



const routes: Routes = [
  //rutas protegidas

  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path:'product', component: ProductsComponent },
      { path:'categories', component: CategoriesComponent },
      { path:'inputdetails', component: InputDetailComponent },
      { path:'outputdetails', component: OutputDetailComponent },
      { path:'product_details', component: ProductDetailsComponent },
      { path:'new_product', component: NewProductComponent },
      { path:'new_categories', component: NewCategoriesComponent },
      { path:'profile_admin', component: ProfileAdminComponent },
      { path:'new-input-details', component: NewInputDetailsComponent },
      { path:'providers', component: ProviderComponent },
      { path:'new-providers', component: NewProviderComponent },
      { path:'profile-admin', component: ProfileAdminComponent },
      { path:'dashboard', component: DashboardComponent},



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
    FormsModule, 
    ReactiveFormsModule,
    RouterLink
  ]
})
export class PagesRoutingModule { }
