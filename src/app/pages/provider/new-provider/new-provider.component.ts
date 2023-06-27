import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CreateProvidersModelDto } from 'src/app/entities/providers.model';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.css']
})
export class NewProviderComponent {
  constructor(private providersServices: ProvidersService) { }
  telefonoCtrl= new FormControl('',[
    Validators.required, 
    Validators.pattern(/^[0-9]+$/),
    Validators.maxLength(2),
    Validators.minLength(2)
  ])



  ngOnInit(): void {

  }

  providers: CreateProvidersModelDto={
    name_provider: '',
    direction: '',
    phone: 0,
  }

  registerProviders(providers: CreateProvidersModelDto) {
    console.log(providers)
    const response = this.providersServices
      .store(providers)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
