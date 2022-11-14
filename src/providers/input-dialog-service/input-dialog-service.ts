
import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular'; // For prompt alert

// Provider
import { GroceriesProvider } from '../../providers/groceries/groceries';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(private alertCtrl: AlertController, public dataService: GroceriesProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  // Displays a prompt to either add or edit a new item
  showPrompt(item?, index?) { //optional arguments
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please enter your changes: " : "Please enter your new item: ",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: item => {
            console.log('Canceled editing the item:  ', item);
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved changes for the item:  ', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
              
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
