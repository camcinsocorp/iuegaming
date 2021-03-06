import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { StartDailyPage } from '../start-daily/start-daily';
import { TapPage } from '../tap/tap';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  userName = this.global.userName;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  goStartDayli(){
    this.navCtrl.setRoot(StartDailyPage);
  }

  goTap(){
    this.navCtrl.setRoot(TapPage);
  }

}
