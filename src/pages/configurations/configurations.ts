import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ConfigurationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurations',
  templateUrl: 'configurations.html',
})
export class ConfigurationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationsPage');
  }

  showIdioma(){
    const prompt = this.alertCtrl.create({
      title: 'Cambiar idioma',
      message: "Seleccione el nuevo idioma",
      inputs: [
        {
          type: 'radio',
          name: 'Español',
          'label': 'Español',
          value: 'Español',
      },
      {
        type: 'radio',
        name: 'Ingles',
        'label': 'Ingles',
        value: 'Ingles',
      },
      ],
      buttons: [
        {
          text: 'CANCEL',
        },
        {
          text: 'CAMBIAR IDIOMA',
        }
      ]
    });
    prompt.present();
  }


  ChangePassword(){
    const Myprompt = this.alertCtrl.create({
      title: 'Actualizar Contraseña',
      
      inputs: [
        {
          type: 'password',
          name: 'password',
          placeholder: 'Contraseña actual',
      },
      {
        type: 'password',
        name: 'newpassword',
        placeholder: 'Nueva Contraseña',
      },
      {
        type: 'password',
        name: 'ConfirmNewPassword',
        placeholder: 'Confirmar nueva contraseña',
      },
      ],
      buttons: [
        {
          text: 'CANCEL',
        },
        {
          text: 'ACTUALIZAR',
        }
      ]
    });
    Myprompt.present();
  }

}
