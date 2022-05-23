import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardTransactionComponent } from './product-card-transaction.component';

describe('ProductCardTransactionComponent', () => {
  let component: ProductCardTransactionComponent;
  let fixture: ComponentFixture<ProductCardTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
