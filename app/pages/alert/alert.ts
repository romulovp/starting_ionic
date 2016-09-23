import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  constructor(private navCtrl: NavController, private AlertCtrl: AlertController) {

  }

  showAlert() : void {
    let alert = this.AlertCtrl.create({
      title: 'Nome',
      buttons:['Ok']
    });
    alert.present();
  }
}
