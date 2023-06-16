import { Component } from '@angular/core';
import { CategoriesModel, CreateCategoriesModelDto, UpdateCategoriesModelDto } from 'src/app/entities/categories.model';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.css']
})
export class NewCategoriesComponent {
  constructor(private categoriesService: CategoriesService) { }

  categoriesModel : CategoriesModel[]=[];

  ngOnInit(): void {}

  categories: CreateCategoriesModelDto = {
    name: '',
    description: ''
  }

  registerCategories(categories: CreateCategoriesModelDto) {
    console.log(categories)
    const response = this.categoriesService
      .createCategories(categories)
      .subscribe((response) => {
        console.log(response);
      });
  }

  categoriesEntity: UpdateCategoriesModelDto={
    id_category:0,
    name: '',
    description: ''

  }
  
  updateCategories(categories: UpdateCategoriesModelDto) {
    console.log(categories)
    console.log('update')
    const response = this.categoriesService
      .updateCategories(categories.id_category, categories)
      .subscribe((response) => {
        console.log(response);
      });
  }

  
}
