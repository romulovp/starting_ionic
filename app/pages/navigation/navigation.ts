import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CardsPage } from '../cards/cards';

/*
  Generated class for the NavigationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/navigation/navigation.html',
})
export class NavigationPage {

  constructor(private navCtrl: NavController) {}

  openPage() {
    this.navCtrl.push(CardsPage);
  }
}
