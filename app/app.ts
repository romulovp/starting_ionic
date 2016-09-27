import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ConnectionService } from './providers/connection-service/connection-service';

import { HomePage } from './pages/home/home';
import { MenuTestPage } from './pages/menu-test/menu-test';
import { GeneratedTestPage } from './pages/generated-test/generated-test';
import { AlertPage } from './pages/alert/alert';
import { ButtonsPage } from './pages/buttons/buttons';
import { CardsPage } from './pages/cards/cards';
import { BgCardPage } from './pages/bg-card/bg-card';
import { SocialCardPage } from './pages/social-card/social-card';
import { MapCardsPage } from './pages/map-cards/map-cards';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<{compenent: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(public platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
    {compenent: HomePage, title: "Home Page", icon: "home"},
    {compenent: MenuTestPage, title: "Menu Test", icon: "menu"},
    {compenent: GeneratedTestPage, title: "Generated Page", icon: "home"},
    {compenent: AlertPage, title: "Alert Page", icon: "alert"},
    {compenent: ButtonsPage, title: "Buttons Page", icon: "arrow-dropdown-circle"},
    {compenent: CardsPage, title: "Cards Page", icon: "card"},
    {compenent: BgCardPage, title: "Bg Cards", icon: "card"},
    {compenent: SocialCardPage, title: "Social Cards", icon: "card"},
    {compenent: MapCardsPage, title: "Map Cards", icon: "map"}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.compenent;
    this.menuCtrl.close(menuSide);
  }

  menuOpened() : void {
    console.log('Abriu');
  }

}

ionicBootstrap(MyApp,[ConnectionService], {
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay',
    }
  }
});
