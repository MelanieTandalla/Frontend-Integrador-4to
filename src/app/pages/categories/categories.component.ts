import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriesModel, CreateCategoriesModelDto, UpdateCategoriesModelDto } from 'src/app/entities/categories.model';
import { UpdateProvidersModelDto } from 'src/app/entities/providers.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  categories: CategoriesModel[] = [];
  filterpost: string = '';
  
  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }



  deletecategory(id: CategoriesModel['id_category']) {
    console.log(id)
    this.categoriesService.destroyCategories(id).subscribe(
      response => {
        this.categories = this.categories.filter(
          category => category.id_category != id)
      })
  }

  //UPDATE
  categoryModel: UpdateCategoriesModelDto = {
    name_category: '',
    description: ''
  }




  updateCategory(categories: UpdateCategoriesModelDto) {
    console.log(categories)
    console.log('update')
    const response = this.categoriesService
      .updateCategories(categories.id_category, categories)
      .subscribe((response) => {
        console.log(response);
      });
  }
}







