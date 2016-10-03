import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/list/list.html',
})
export class ListPage {

  personagens: Array<string>;

  constructor(private navCtrl: NavController) {

    this.personagens = [
      'Tyrion Lannister',
      'Deanerys Targaryen',
      'Oberyn Martell'
    ];

  }

}
