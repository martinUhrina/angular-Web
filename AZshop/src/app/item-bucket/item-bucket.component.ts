import { Component, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-item-bucket',
  templateUrl: './item-bucket.component.html',
  styleUrls: ['./item-bucket.component.css']
})
export class ItemBucketComponent {
  @Input()
  products!: Products[];
}
