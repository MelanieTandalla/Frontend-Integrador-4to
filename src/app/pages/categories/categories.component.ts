import { Component, OnInit } from '@angular/core';
import { CategoriesModel, CreateCategoriesModelDto, UpdateCategoriesModelDto } from 'src/app/entities/categories.model';
import { UpdateProvidersModelDto } from 'src/app/entities/providers.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   
  constructor(private categoriesService: CategoriesService) {}
  Categories: CategoriesModel[] = [];

  ngOnInit(): void {
    this.getCategories();
    this.Prueba2();
  }

  getCategories() { 
    this.categoriesService.getAllCategories().subscribe((res) => {
      this.Categories = res
      console.table(this.Categories)
    });
  }

  Prueba: CategoriesModel={
    id_category:1,
    name: '',
    description:''

  }

  Prueba2(){
    this.Categories.push(this.Prueba)
    console.log(this.Categories)
  }


}
