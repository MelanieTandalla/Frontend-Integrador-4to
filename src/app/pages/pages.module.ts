import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [ DashboardComponent, ProductsComponent],
  imports: [CommonModule],
  exports: [ DashboardComponent,ProductsComponent ],
})
export class PagesModule {}
