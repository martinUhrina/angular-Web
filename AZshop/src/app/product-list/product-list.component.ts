import { Component, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Input()
  products!: Products[] ;

  addToBasket(product:Products) {
    
  }
}
