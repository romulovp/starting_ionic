import { Component } from '@angular/core';
import { ionicBootstrap, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ConnectionService } from './providers/connection-service/connection-service';

import { HomePage } from './pages/home/home';
import { MenuTestPage } from './pages/menu-test/menu-test';
import { GeneratedTestPage } from './pages/generated-test/generated-test';


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
    {compenent: GeneratedTestPage, title: "Generated Page", icon: "home"}
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
