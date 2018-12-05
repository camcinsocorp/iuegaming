import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/services/user-services/user-services';

/**
 * Generated class for the TopTenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-ten',
  templateUrl: 'top-ten.html',
})
export class TopTenPage {


  TopTenList: any;
  CountUsers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServicesProvider: UserServicesProvider,
    public toastCtrl: ToastController) {
    this.getTopTen();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopTenPage');
  }

  getTopTen() {
    this.userServicesProvider.GetTopTenUsers()
      .then(data => {
        this.TopTenList = data.top
        this.CountUsers = data.count
      });
  }

}
