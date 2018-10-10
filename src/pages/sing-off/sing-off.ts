import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';


/**
 * Generated class for the SingOffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sing-off',
  templateUrl: 'sing-off.html',
})
export class SingOffPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingOffPage');
  }

  IRLOGIN(){
    this.navCtrl.setRoot(LoginPage);
  }

  IRINICIO(){
    this.navCtrl.setRoot(InicioPage);
  }

  Confirmar(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Cerrar sesión',
      subTitle: '¿Realmente desea cerrar sesión?',
      buttons: [
        {
          text: 'CANCEL',
          handler: () => {
            console.log("Sucefull")
          }

      },
      {
        text: 'CERRAR SESIÓN',
        handler: () =>{
          this.IRLOGIN()
        }
      }
    ]
    });
    actionSheet.present();
  }

}
