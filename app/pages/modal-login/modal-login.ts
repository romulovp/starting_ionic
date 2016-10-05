import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {

  user:any = {};

  constructor(private navCtrl: NavController, private view:ViewController) {

  }

  logar(){
    this.view.dismiss(this.user);
  }

  close(){
    this.view.dismiss();
  }
}
