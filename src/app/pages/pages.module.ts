import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { OutputDetailComponent } from './output-detail/output-detail.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { ProviderComponent } from './provider/provider.component';
import { NewProviderComponent } from './provider/new-provider/new-provider.component';



@NgModule({
  declarations: [ DashboardComponent, ProductsComponent, InputDetailComponent, OutputDetailComponent, ProfileAdminComponent, ProductDetailsComponent, CategoriesComponent, ProviderComponent, NewProviderComponent],
  imports: [CommonModule,  FormsModule],
  exports: [ DashboardComponent,ProductsComponent ],
})
export class PagesModule {}
