import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvidersModel, UpdateProvidersModelDto } from 'src/app/entities/providers.model';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
   
  constructor(private providersService: ProvidersService, private activedrouter: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.providersService.getAll().subscribe(data=>{
      this.provider= data;
    })     
  }

  editar(id:ProvidersModel['id_provider']){
    this.router.navigate(['dashboard/providers_details', id])
    
  }

  provider: ProvidersModel[]=[];

  delete_provider(id_providers:ProvidersModel['id_provider']){
    this.providersService.destroy(id_providers).subscribe(
      response=>{
        this.provider=this.provider.filter(
          provider=>provider.id_provider!= id_providers)
      })
  }


  providerModel: UpdateProvidersModelDto = {
    name_provider: '',
    direction: '',
    telephone:''
  }

  updateProvider(provider: UpdateProvidersModelDto) {
    console.log(provider)
    console.log('update')
    const response = this.providersService.update(provider.id_provider, provider)
      .subscribe((response) => {
        console.log(response);
      });
  }

}