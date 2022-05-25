import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  productsData: any;
  products: any;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.productsData = data;
      this.products = this.productsData.sort((a : any, b: any) => new Date(b.createdDate).valueOf() - new Date(a.createdDate).valueOf());
    });
 }

  ngOnInit(): void {
  }

}
