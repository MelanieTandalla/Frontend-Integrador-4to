import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductsModel } from 'src/app/entities/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: ProductsModel[]=[];
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
  }




}
