import { Component } from '@angular/core';
import { CategoriesModel } from 'src/app/entities/categories.model';
import { CreateProductModelDto, ProductsModel, UpdateProductModelDto } from 'src/app/entities/products.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: ProductsModel[] = [];
  selectedProduct: UpdateProductModelDto={}

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
      this.productsService.getAll().subscribe(
        response=>{
          this.products= response}
          )
    }

    getProduct(){
      this.productsService.getOne(498).subscribe(
        response=>{
          console.log(response)})
    }

    createProduct(products: ProductsModel){
      const response = this.productsService
          .create(products).subscribe((response) => {
            console.log(response);
          });
    }

    deleteProduct(id:ProductsModel['id_products']){
      this.productsService.destroy(id).subscribe(
        response => {
          this.products= this.products.filter(product => product.id_products != id);
          console.log(response)})
     }
}
