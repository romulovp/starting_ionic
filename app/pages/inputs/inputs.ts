import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/inputs/inputs.html',
})
export class InputsPage {

  login: string;
  senha: string;

  constructor(private navCtrl: NavController, private AlertCtrl: AlertController) {

  }

  entrar() {
    let alert = this.AlertCtrl.create({
      title: 'Entrando...',
      message: 'Login: ' + this.login + ', Senha: ' + this.senha,
    });
    alert.present();
  }

}
