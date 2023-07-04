import { Component } from '@angular/core';
import { CreateOutputModelDto } from 'src/app/entities/output.model';
import { ProductsModel } from 'src/app/entities/products.model';
import { OutputDetailsService } from 'src/app/services/output-details.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-output-detail',
  templateUrl: './output-detail.component.html',
  styleUrls: ['./output-detail.component.css']
})

export class OutputDetailComponent {

  products: ProductsModel[] = [];

  constructor(private outputdetailsService: OutputDetailsService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  output: CreateOutputModelDto = {
    id_product: 0,
    date_output: new Date,
    outgoing_amount: 0
  }

  registerOutput(output: CreateOutputModelDto) {
    console.log(output)
    const response = this.outputdetailsService
      .createOuput(output)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
