import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listOfItems:  Products[] = [];

  constructor() { }

  setList(listOfItems : Products[]){
    this.listOfItems = listOfItems;
  }

  getList() :  Products[]{
    return this.listOfItems;
  }
}
