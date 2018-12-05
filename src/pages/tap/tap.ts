import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { StartPage } from '../start/start';

/**
 * Generated class for the TapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tap',
  templateUrl: 'tap.html',
})
export class TapPage {

  Minute:number;
  Seconds:number;
  Paused: boolean;
  Click: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) 
  {
    this.Click=0;
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  resetTimer(): void {
    this.Minute = 0;
    this.Seconds=59;
  }

  private tick(): void{
    if(--this.Seconds<0){
        this.Seconds=59;
        if(this.Seconds=0){
          this.Paused = !this.Paused
        } 
      }
      
    }

    Clicks(){
      if(this.Seconds>0)
      {
      this.Click=this.Click + 1;
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Has finalizado',
        subTitle: 'Tu puntaje es '+  this.Click,
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.setRoot(StartPage);
    }
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapPage');
  }

}
