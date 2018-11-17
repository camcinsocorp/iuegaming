import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameServicesProvider } from '../../providers/services/game-services.ts/game-services';
import { GlobalProvider } from '../../providers/global/global';

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
    private gameServicesProvider: GameServicesProvider, public global: GlobalProvider) {
      this.getQuestion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  getQuestion() {
    this.gameServicesProvider.getLevels({ levelNumber: this.global.ToLevel})
          .then(data => {
            this.Question = data.question;
            this.Answer1 = data.answer1;
            this.Answer2 = data.answer2;
            this.Answer3 = data.answer3;
            this.Answer4 = data.answer4;
            this.CorrectAnswer = data.correctAnswer;
            this.ScoreRewarded = data.scoreRewarded;
          })
  }

}
