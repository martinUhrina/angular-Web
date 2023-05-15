import { Component, Input } from '@angular/core';
import { Products } from './products';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  title = 'AZshop';

  productInBucket: Products[] = [];

  constructor(private listService: ListService){
      this.products = listService.getList();
  }

  products: Products[] = this.listService.getList();
}
