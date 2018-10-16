import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';


  tutorialStrings: string [] = [];

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    

    this.fillText(translate);
    this.slides = [
      {
        title: this.tutorialStrings[0],
        description: this.tutorialStrings[1],
        image: 'assets/img/accreditation/images/logo.png',
      },
      { 
        title: this.tutorialStrings[2],
        description: this.tutorialStrings[3],
        image: 'assets/img/accreditation/images/Muñecos.svg',
      },
      {
        title: this.tutorialStrings[4],
        description: this.tutorialStrings[5],
        image: 'assets/img/accreditation/images/PersonajesAll.svg',
      },
    ];
    this.dir = platform.dir();
   
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }



  fillText(translate: TranslateService) {
    var tutorial: string = "tutorial";
    var first: string = "first";
    var second: string = "second";
    var third: string = "third";

    var title: string = "title";
    var subtitle: string = "subtitle";

    //First
    this.tutorialStrings[0] = translate.instant("" + tutorial + "." + first + "." + title);
    this.tutorialStrings[1] = translate.instant("" + tutorial + "." + first + "." + subtitle);

    //Second
    this.tutorialStrings[2] = translate.instant("" + tutorial + "." + second + "." + subtitle);
    this.tutorialStrings[3] = translate.instant("" + tutorial + "." + second + "." + subtitle);

    //Third
    this.tutorialStrings[4] = translate.instant("" + tutorial + "." + third + "." + subtitle);
    this.tutorialStrings[5] = translate.instant("" + tutorial + "." + third + "." + subtitle);


  }

}
