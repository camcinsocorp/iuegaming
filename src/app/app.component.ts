import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { RecoverPage } from '../pages/recover/recover';
import { InicioPage } from '../pages/inicio/inicio';
import { MenuPage } from '../pages/menu/menu';
import { templateSourceUrl } from '@angular/compiler';
import { ConfigurationsPage } from '../pages/configurations/configurations';

export interface PageInterface {
  title: string;
  component?: any;
  icon: string;

}

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
        <div class="img-Contenedor">
            <img src="assets/img/accreditation/images/fondo.png">
            <div class="img-texto-encima">
                <ion-avatar item-start>
                    <img src="assets/img/marty-avatar.png" class="circle-pic">
                </ion-avatar>
            </div>
            <div class="img-texto-centrado">
                <ion-label>Felipe Dos Santos</ion-label>
                <ion-label>fepeDos</ion-label>
            </div>
        </div>
    </ion-header>

    <ion-content>
        <div class="">
        </div>

        <ion-list>
            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
                <ion-icon item-start [name]="p.icon"></ion-icon>
                {{p.title}}
            </button>
        </ion-list>
    </ion-content>

</ion-menu>
<ion-nav #content [root]="rootPage"></ion-nav>`

})
export class MyApp {
  rootPage = ConfigurationsPage; //FirstRunPage

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Inicio', component: 'StartPage', icon: 'apps' },
    { title: 'Perfil', component: 'ProfilePage', icon: 'person' },
    { title: 'Top 10', component: 'TopTenPage', icon: 'list-box' },
    { title: 'Configuración', component: 'ConfigurationsPage', icon: 'settings' },
    { title: 'Cerrar sesión', component: 'SignOffPage', icon: 'exit' },
    //{ title: 'Login', component: 'LoginPage' },
    //{ title: 'Signup', component: 'SignupPage' },
    //{ title: 'Master Detail', component: 'ListMasterPage' },
    //{ title: 'Menu', component: 'MenuPage' },
    //{ title: 'Settings', component: 'SettingsPage' },
    //{ title: 'Search', component: 'SearchPage' }
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
    this.menuCtrl.enable(false, 'WelcomePage');
  }


  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
