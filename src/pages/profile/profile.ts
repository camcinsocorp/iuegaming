import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public translateService: TranslateService) {

    this.translateService.get('PROFILE_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
