import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { InicioPage } from '../inicio/inicio';
import { LoginPage } from '../login/login';

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
  Valido=false;
  Invalido=false;
  Restablecer=false;
  

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

  Listo(){
    this.Principal=false;
    this.ShowRe=false;
    this.Invalido=false;
    this.Valido=true;
  }

  RestablecerPassword(){
    this.Principal=false;
    this.ShowRe=false;
    this.Invalido=false;
    this.Valido=false;
    this.Restablecer=true;

  }

  PageInicio(){
    this.navCtrl.push(LoginPage);
  }

}
