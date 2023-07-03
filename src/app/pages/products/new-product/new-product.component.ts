import { Component } from '@angular/core';
import { CategoriesModel } from 'src/app/entities/categories.model';
import { CreateProductDto, ProductsModel } from 'src/app/entities/products.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) { }

  productModel: ProductsModel[] = [];
  categorys: CategoriesModel[] = [];

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categorys = data;
    })
  }

  products: CreateProductDto = {
    name_product: '',
    description: '',
    unit_price: 0,
    quantity_available: 0, //cantidad disponible //cantidad minima
    until_box: true,
    category: '',
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
