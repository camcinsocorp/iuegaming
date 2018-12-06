import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameServicesProvider } from '../../providers/services/game-services.ts/game-services';
import { GlobalProvider } from '../../providers/global/global';
import { AlertController } from 'ionic-angular';
import { StartDailyPage } from '../start-daily/start-daily';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  Question: any;
  Answer1: any;
  Answer2: any;
  Answer3: any;
  Answer4: any;
  CorrectAnswer: any;
  ScoreRewarded: any

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private gameServicesProvider: GameServicesProvider, public global: GlobalProvider, private alertCtrl: AlertController) {
    // this.getQuestion();
    this.selectQuetion();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  // getQuestion() {
  //   this.gameServicesProvider.getLevels({ levelNumber: this.global.ToLevel})
  //         .then(data => {
  //           this.Question = data.question;
  //           this.Answer1 = data.answer1;
  //           this.Answer2 = data.answer2;
  //           this.Answer3 = data.answer3;
  //           this.Answer4 = data.answer4;
  //           this.CorrectAnswer = data.correctAnswer;
  //           this.ScoreRewarded = data.scoreRewarded;
  //         })
  // }

  selectQuetion(){
    this.Question = "¿Cual fue el primer pregrado que obtuvo la acreditación de alta calidad en la IUE?";
    this.Answer1 = "Psicología";
    this.Answer2 = "Ingeniería de sistemas";
    this.Answer3 = "Derecho";
    this.Answer4 = "Administración de negocios internacionales";
  }


  win() {
    let alert = this.alertCtrl.create({
      title: 'CORRECTO',
      subTitle: 'El primer programa acreditado fue psicología',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.setRoot(StartDailyPage);
  }
  fail() {
    let alert = this.alertCtrl.create({
      title: 'INCORRECTO',
      subTitle: 'El primer programa acreditado fue psicología',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.setRoot(StartDailyPage);

  }

}
