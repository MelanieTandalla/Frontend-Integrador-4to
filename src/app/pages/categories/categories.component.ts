import { Component, OnInit } from '@angular/core';
import { CreateCategoriesModelDto, UpdateCategoriesModelDto } from 'src/app/entities/categories.model';
import { UpdateProvidersModelDto } from 'src/app/entities/providers.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   
  constructor(private categoriesService: CategoriesService) {}

  categoriesModel: UpdateCategoriesModelDto={
    id_category: 0,
    name: '',
    description: ''
  }
  updating : boolean = false

  ngOnInit(): void {
  }


}
