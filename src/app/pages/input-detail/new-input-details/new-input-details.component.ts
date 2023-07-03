import { Component } from '@angular/core';
import { CategoriesModel } from 'src/app/entities/categories.model';
import { ProductsModel } from 'src/app/entities/products.model';
import { ProvidersModel } from 'src/app/entities/providers.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { InputDetailsService } from 'src/app/services/input-details.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-new-input-details',
  templateUrl: './new-input-details.component.html',
  styleUrls: ['./new-input-details.component.css']
})
export class NewInputDetailsComponent {

  products: ProductsModel[] = [];
  provider: ProvidersModel[]=[];
  categories: CategoriesModel[] = [];


  constructor(private inputdetailsService: InputDetailsService, private productsService: ProductsService, private providersService: ProvidersService, private categoriesService: CategoriesService) {}
  
  ngOnInit(): void {  
    this.productsService.getAllProducts().subscribe(data=>{
      this.products = data;
    })

    this.providersService.getAll().subscribe(data=>{
      this.provider= data;
    })     

    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories= data;
    })
  }
  


}
