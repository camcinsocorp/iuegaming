import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) 
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
      }
    }

    togglePause(): void{

    }

    Clicks(){
      this.Click=this.Click + 1;
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TapPage');
  }

}
