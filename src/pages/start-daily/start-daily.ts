import { QuestionsPage } from './../questions/questions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { GameServicesProvider } from '../../providers/services/game-services.ts/game-services';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the StartDailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-daily',
  templateUrl: 'start-daily.html',
})
export class StartDailyPage {

  userName = this.global.userName;

  GameList: any;
  CountUsers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider,
    private gameServicesProvider: GameServicesProvider, private alertCtrl: AlertController) {

    this.getTopTen();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartDailyPage');
  }

  goQuestions(level){
    // this.global.ToLevel = level;
    // this.navCtrl.setRoot(QuestionsPage);
    this.navCtrl.setRoot(QuestionsPage);
  }

  getTopTen() {
    this.gameServicesProvider.getAllLevels()
      .then(data => {
        this.GameList = data.top
        this.CountUsers = data.count
      });
  }



  

}
