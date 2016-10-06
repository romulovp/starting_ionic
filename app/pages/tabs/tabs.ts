import { Component } from '@angular/core';
import { NavController, ionicBootstrap } from 'ionic-angular';
import { HomeTabsPage } from '../home-tabs/home-tabs';
import { ContatosTabsPage } from '../contatos-tabs/contatos-tabs';

/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  template: `
  <ion-tabs>
    <ion-tab tabTitle="Home" tabIcon="home" [root]="home"></ion-tab>
    <ion-tab tabTitle="Contatos" tabIcon="contacts" [root]="cards" tabBadge="8" tabBadgeStyle="danger"></ion-tab>
  </ion-tabs>`
})
export class TabsPage {

  home: any;
  cards: any;

  constructor(private navCtrl: NavController) {

    this.home = HomeTabsPage;
    this.cards = ContatosTabsPage;

  }

}
