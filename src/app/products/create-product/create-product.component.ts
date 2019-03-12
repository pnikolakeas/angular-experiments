import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'app/model/product';
import { ProductCreation } from 'app/model/product-creation';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product: Product;
  @Output() private productCreation: EventEmitter<ProductCreation> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  createProduct(productForm) {
    console.log('Product form', productForm.value);
    if(productForm.valid) {
      this.product = productForm.value.product;
      this.productCreation.emit({product: this.product});
      console.log('Creating product ' + this.product);
    } else {
      console.log('Product form is in invalid state');
    }
  }
}
