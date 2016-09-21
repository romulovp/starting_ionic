import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { MenuTestPage } from './pages/menu-test/menu-test';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<{compenent: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(public platform: Platform) {

    this.pages = [
    {compenent: HomePage, title: "Home Page", icon: "home"},
    {compenent: MenuTestPage, title: "Menu Test", icon: "menu"}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any) : void {
    this.rootPage = page.compenent;
  }

}

ionicBootstrap(MyApp);
