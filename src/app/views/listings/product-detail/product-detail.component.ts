import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string = '';
  productDetail: any;
  sellerDetail: any;
  isProductActive = false;
  defaultProfileImg = environment.ANG_APP_DEFAULT_PIC_URL;
  dialogLock = false;
  productCharacters: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProductDetail(this.productId);
  }

  async getProductDetail(id: string) {
    this.productService.getProductById(id).subscribe((data: any) => {
      this.productDetail = data;
      this.isProductActive = data.status === 'Active' ? true : false;
      if(!data.characters.length) {
        this.productCharacters = '';
      }
      const characters: any[] = [];
      data.characters.forEach((element: any) => {
          characters.push(element.name)
      });
      this.productCharacters = characters.join(', ');
      this.profileService.getProfilebyUserId(data.createdByUserId).subscribe(data => {
        this.sellerDetail = data;
        console.log('productDetail', this.productDetail);
        console.log('sellerDetail', this.sellerDetail);
        console.log('isProductActive', this.isProductActive);
      });
    });
  }

  back() {
    this.router.navigate(['/listings']);
  }

}
