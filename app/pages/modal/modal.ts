import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';

@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {}

  openModal() {
    let modal = this.modalCtrl.create(ModalLoginPage);

    modal.onDidDismiss((param) =>{
      console.log('Dados do usuário', param);
    });

    modal.present(modal);
  }

  }
