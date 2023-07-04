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
  categorys: CategoriesModel[] = [];


  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) {}

  ngOnInit(): void {  
    this.productsService.getAllProducts().subscribe(data=>{
      this.products = data;
      this.categoriesService.getAllCategories().subscribe(data => {
        this.categorys = data;
      })
    })
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



    deleteProduct(id:ProductsModel['id_product']){
      this.productsService.destroyProducts(id).subscribe(
        response => {
          this.products= this.products.filter(product => product.id_product != id);
          console.log(response)})
     }

     productModel: UpdateProductDto={
      id_product: 0,
      name_product: '',
      description: '',
      unit_price: 0,
      quantity_available: 0, //cantidad disponibl/cantidad minima
      until_box: true,
      category: 0,
      name_category: ''

     }

     updateProducts(products: UpdateProductDto) {
      const response = this.productsService
        .updateProducts(products.id_product, products)
        .subscribe((response) => {
          console.log(response);
        });
    }
}
