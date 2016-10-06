import { Component } from '@angular/core';
import { NavController, ToastController, ToastOptions } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/toast/toast.html',
})
export class ToastPage {

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Toast Teste',
      //duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
}
