import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesModel, UpdateCategoriesModelDto } from 'src/app/entities/categories.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent {
  constructor(private categoriesService: CategoriesService, private activedrouter: ActivatedRoute, private router: Router) {}

  editarcategory: CategoriesModel={
    name_category: '',
    description: '',
  }

  editarform= new FormGroup({
    name_category: new FormControl(''),
    description: new FormControl(''),
  })

  ngOnInit():void{
    let category_id = this.activedrouter.snapshot.paramMap.get('id');
    this.categoriesService.getOneCategories(category_id).subscribe(data=>{
      this.editarcategory= data;
      this.editarform.setValue({
        'name_category': this.editarcategory.name_category,
        'description': this.editarcategory.description
      }) 
      console.log(this.editarform.value)
    })
  }

  submit(data:any){
    if(this.editarcategory){
      data.id=this.editarcategory.id
    }
    this.categoriesService.updateCategories(data).subscribe((result)=>{
      if (result) {
        console.log('Categoria Actualizada')
      }
    })
    console.log(data)
  }
  


}
