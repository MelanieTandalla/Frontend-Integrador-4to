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
   
  constructor(private categoriesService: CategoriesService, private activedrouter: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(data=>{
      this.categories= data;
    })     
  }

  editar(id:CategoriesModel['id']){
    this.router.navigate(['dashboard/categories_details', id])
    
  }



  categories: CategoriesModel[]=[];

  deletecategory(id:CategoriesModel['id']){
    this.categoriesService.destroyCategories(id).subscribe(
      response=>{
        this.categories=this.categories.filter(
          category=>category.id != id)
      })
  }

}
