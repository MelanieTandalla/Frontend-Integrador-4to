import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { OutputDetailComponent } from './output-detail/output-detail.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderComponent } from './provider/provider.component';
import { NewProviderComponent } from './provider/new-provider/new-provider.component';
import { RouterLink } from '@angular/router';
import { filter, pipe } from 'rxjs';
import { FilterPipe } from '../pipes/filter.pipe.pipe';



@NgModule({
  declarations: [ DashboardComponent, ProductsComponent, InputDetailComponent, OutputDetailComponent, ProfileAdminComponent, CategoriesComponent, ProviderComponent, NewProviderComponent, FilterPipe ],
  imports: [CommonModule,  FormsModule, ReactiveFormsModule, RouterLink,  ],
  exports: [ DashboardComponent,ProductsComponent ],
})
export class PagesModule {}