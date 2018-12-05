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
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Cambiar idioma',
        }
      ]
    });
    prompt.present();
  }

}
