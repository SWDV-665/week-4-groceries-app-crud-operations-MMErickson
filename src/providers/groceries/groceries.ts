//import { HttpClient } from '@angular/common/http'; http not needed yet
import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesProvider {

  // Array of grocery items
  items = [];

  /* Hardcoded example of grocery items list
  items = [
    {
      name: 'Milk',
      quantity: 2
    },
    {
      name: 'Bread',
      quantity: 1
    },
    {
      name: 'Eggs',
      quantity: 1
    },
    {
      name: 'Apples',
      quantity: 2
    },
  ];
  */


  //constructor(public http: HttpClient) { http not needed yet
  constructor() {
    console.log('Hello GroceriesProvider Provider');
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }

}
