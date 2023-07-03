import { Component } from '@angular/core';
import { OutputDetailsService } from 'src/app/services/output-details.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-output-detail',
  templateUrl: './output-detail.component.html',
  styleUrls: ['./output-detail.component.css']
})
export class OutputDetailComponent {

  constructor(private outputdetailsService: OutputDetailsService, private productsService: ProductsService){}


}
