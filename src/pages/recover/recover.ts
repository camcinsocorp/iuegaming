import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the RecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover',
  templateUrl: 'recover.html',
})
export class RecoverPage {

  Principal=true;
  ShowRe=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverPage');
  }

  Aceptar(){
    this.Principal=false;
    this.ShowRe=true;
  }

}
