import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { InicioPageModule } from '../inicio/inicio.module';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponents?: any;
  index?:number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage: 'InicioPageModule';
  @ViewChild(Nav) nav:Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
