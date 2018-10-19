import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the StartDailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-daily',
  templateUrl: 'start-daily.html',
})
export class StartDailyPage {

  userName = this.global.userName;

 Newb: any = [
   {Etiqueta: "Numero 1", valor:"1", color:"primary"},
   {Etiqueta: "Numero 2", valor:"2", color:"primary"},
   {Etiqueta: "Numero 3", valor:"3", color:"primary"},
   {Etiqueta: "Numero 4", valor:"4", color:"primary"},
   {Etiqueta: "Numero 5", valor:"5", color:"primary"},
   {Etiqueta: "Numero 6", valor:"6", color:"primary"},
   {Etiqueta: "Numero 7", valor:"7", color:"primary"},
   {Etiqueta: "Numero 8", valor:"8", color:"primary"},
   {Etiqueta: "Numero 9", valor:"9", color:"primary"},
   {Etiqueta: "Numero 10", valor:"10", color:"soft"},
   {Etiqueta: "Numero 11", valor:"11", color:"soft"},
   {Etiqueta: "Numero 12", valor:"12", color:"soft"},
   {Etiqueta: "Numero 13", valor:"13", color:"soft"},
   {Etiqueta: "Numero 14", valor:"14", color:"soft"},
   {Etiqueta: "Numero 15", valor:"15", color:"soft"},
   {Etiqueta: "Numero 16", valor:"16", color:"soft"},
   {Etiqueta: "Numero 17", valor:"17", color:"soft"},
   {Etiqueta: "Numero 18", valor:"18", color:"soft"},
   {Etiqueta: "Numero 19", valor:"19", color:"soft"},
   {Etiqueta: "Numero 20", valor:"20", color:"soft"},
   {Etiqueta: "Numero 21", valor:"21", color:"soft"},
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartDailyPage');
  }

}
