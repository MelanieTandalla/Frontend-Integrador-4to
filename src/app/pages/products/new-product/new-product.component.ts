import { Component } from '@angular/core';
import { CategoriesModel } from 'src/app/entities/categories.model';
import { CreateProductDto, ProductsModel } from 'src/app/entities/products.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  constructor(private productsService: ProductsService) { }

  productModel : ProductsModel[]=[];
  categories: CategoriesModel[]=[];

  ngOnInit(): void {}

  products: CreateProductDto = {
    id_products: 0,
    name_product: '',
    description: '',
    id_category: 0,
    unit_price: 0,
    quantity_available: 0, //cantidad disponible
    minimum_amount: 0, //cantidad minima
    stock: true,
  }

  registerProduct(products: CreateProductDto) {
    console.log(products)
    const response = this.productsService
      .createProducts(products)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
