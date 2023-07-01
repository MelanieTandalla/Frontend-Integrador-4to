import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesModel, CreateCategoriesModelDto, UpdateCategoriesModelDto } from 'src/app/entities/categories.model';
import { CategoriesService } from 'src/app/services/categories.service';



@Component({
  selector: 'app-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.css']
})
export class NewCategoriesComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) { }
  nombreCtrl= new FormControl('',[
    Validators.required, 
    Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/),
  ]);
  updating : boolean = false
  ngOnInit(): void {

  }

  category: CreateCategoriesModelDto = {
    name_category: '',
    description: '',
  };

  registerCategories(category: CreateCategoriesModelDto) {
    console.log(category)
    const response = this.categoriesService
      .createCategories(category)
      .subscribe((response) => {
        console.log(response);
      });
  }

  


  
}
