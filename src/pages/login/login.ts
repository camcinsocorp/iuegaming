import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../';
import { InicioPage } from '../inicio/inicio';
import { StartPage } from '../start/start';
import { UserServicesProvider } from '../../providers/services/user-services/user-services';
import { Login } from '../../models/login';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  private userLogin: Login;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public userServicesProvider: UserServicesProvider,
    public global: GlobalProvider) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.userLogin = new Login();
    this.userLogin.email;
    this.userLogin.password;

  }

  Recover() {
    this.navCtrl.push('RecoverPage');
  }

  Inicio() {
    this.navCtrl.setRoot('InicioPage');
    // Attempt to login in through our User service
  }
  doLogin() {
    if (this.userLogin.email == undefined || this.userLogin.password == undefined || this.userLogin.email == "" || this.userLogin.password == "") {
      let toast = this.toastCtrl.create({
        message: 'Campos incorrectos.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      this.userServicesProvider.Login(this.userLogin)
        .then(data => {
          if (data) {
            this.global.userEmail = this.userLogin.email;
            this.global.userToken = data.token;
            this.global.userName = data.name;
            this.global.userGender = data.gender;
            this.global.userLevelsCompleted = data.levelsCompleted;
            console.log(this.global.userEmail + " " + this.global.userToken + " " + this.global.userName + " " + this.global.userGender + " " );
            this.navCtrl.push(StartPage);
          }
        })
    }


    //   this.user.login(this.account).subscribe((resp) => {
    //     this.navCtrl.push(StartPage);
    //   }, (err) => {
    //     this.navCtrl.push(StartPage);
    //     // Unable to log in
    //     let toast = this.toastCtrl.create({
    //       message: this.loginErrorString,
    //       duration: 3000,
    //       position: 'top'
    //     });
    //     toast.present();
    //   });
    // }

    // Attempt to login in through our User service
  }
}
