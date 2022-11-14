import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastController } from 'ionic-angular'; // For popup toast messages

import { AlertController } from 'ionic-angular'; // For prompt alert

// Provider
import { GroceriesProvider } from '../../providers/groceries/groceries';

import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Title displayed at the top of the home page
  title = 'Grocery List';

  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private alertCtrl: AlertController, public dataService: GroceriesProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }


  // Edits an item from the items array
  editItem(item, index) {

    console.log('Item being edited: ', item, index);

    const toast = this.toastCtrl.create({
      message: 'This item was edited:  ' + item.name,
      duration: 3000
    });
    toast.present();

    this.inputDialogService.showPrompt(item, index);

  }

  
  // Removes an item from the items array
  removeItem(item, index) {

    console.log('Item being removed: ', item, index);

    const toast = this.toastCtrl.create({
      message: 'This item was removed:  ' + item.name,
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index)

  }

  // Adds an item to the items array
  addItem() {

    console.log('Adding an item');
    this.inputDialogService.showPrompt();
  }

  
}


