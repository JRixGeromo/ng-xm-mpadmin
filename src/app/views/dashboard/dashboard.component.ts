import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productsData: any;
  products: any;

  options: FormGroup;

  constructor(fb: FormBuilder, private productService: ProductService) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
    this.productService.getProducts().subscribe(data => {
      this.productsData = data;
      this.products = this.productsData.sort((a : any, b: any) => new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf()).slice(0,4);
    });
  }

  ngOnInit(): void {
  }

}
