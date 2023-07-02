import { Component } from '@angular/core';
import { CategoriesModel } from 'src/app/entities/categories.model';
import {  ProductsModel, UpdateProductDto  } from 'src/app/entities/products.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: ProductsModel[] = [];
  selectedProduct: UpdateProductDto={}

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) {}

  ngOnInit(): void {  

  }

  
    name_product: string = ''
    category: CategoriesModel[] = []
    unit_price!: number
    quantity_available!: number;   //cantidad disponible
    minimum_amount!: number//cantidad minima
    stock!: number


    getProducts(){
      this.productsService.getAllProducts().subscribe(
        response=>{
          this.products= response}
          )
    }

    getProduct(){
      this.productsService.getOneProducts(498).subscribe(
        response=>{
          console.log(response)})
    }

    createProduct(products: ProductsModel){
      const response = this.productsService
          .createProducts(products).subscribe((response) => {
            console.log(response);
          });
    }

    deleteProduct(id:ProductsModel['id_product']){
      this.productsService.destroyProducts(id).subscribe(
        response => {
          this.products= this.products.filter(product => product.id_product != id);
          console.log(response)})
     }
}
