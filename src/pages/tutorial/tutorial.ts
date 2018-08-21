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
        image: 'assets/accreditation/images/logo.png',
      },
      {
        title: "values.TUTORIAL_SLIDE2_TITLE",
        description: "values.TUTORIAL_SLIDE2_DESCRIPTION",
        image: 'assets/accreditation/images/she.png',
      },
      {
        title: "",
        description: "values.TUTORIAL_SLIDE3_DESCRIPTIO",
        image: 'assets/img/ica-slidebox-img-3.png',
      }
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
    var title: string = "title";
    var subtitle: string = "subtitle";

    this.tutorialStrings[0] = translate.instant("" + tutorial + "." + first + "." + title);
    this.tutorialStrings[1] = translate.instant("" + tutorial + "." + first + "." + subtitle);

  }

}
