import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {

  @Input() transactionDetail: any;

  transactionProduct: any;
  transactionSeller: any;
  transactionBuyer: any;
  transactionStatus: string = '';

  constructor(
    private productService: ProductService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.productService.getProductById(this.transactionDetail.productId).subscribe(data => {
      this.transactionProduct = data;
    });
    this.profileService.getProfilebyUserId(this.transactionDetail.sellerUserId).subscribe(data => {
      this.transactionSeller = data;
    });
    this.profileService.getProfilebyUserId(this.transactionDetail.buyerUserId).subscribe(data => {
      this.transactionBuyer = data;
    });
    this.transactionStatus = this.transactionDetail.status.replace('_', ' ').replace('_', ' ');
  };

}
