import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { InicioPage } from '../inicio/inicio';
import { LoginPage } from '../login/login';
import { UserServicesProvider } from '../../providers/services/user-services/user-services';
import { ForgotPassword } from '../../models/fogot-password';
import { ResetPassword } from '../../models/reset-password';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the RecoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recover',
  templateUrl: 'recover.html',
})
export class RecoverPage {

  Principal = true;
  ShowRe = false;
  Valido = false;
  Invalido = false;
  Restablecer = false;

  private forgotPassword: ForgotPassword;
  private recoverPassword: ResetPassword;
  private confirmToken: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translateService: TranslateService, public userServicesProvider: UserServicesProvider,
    public toastCtrl: ToastController, public global: GlobalProvider) {

    this.forgotPassword = new ForgotPassword();
    this.forgotPassword.email;
    this.recoverPassword = new ResetPassword();
    this.recoverPassword.reset_password_token;
    this.recoverPassword.newPassword;
    this.recoverPassword.verifyPassword;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverPage');
  }

  Aceptar() {
    this.Principal = false;
    this.ShowRe = true;
  }

  Listo() {
    this.Principal = false;
    this.ShowRe = false;
    this.Invalido = false;
    this.Valido = true;
  }

  RestablecerPassword() {
    this.Principal = false;
    this.ShowRe = false;
    this.Invalido = false;
    this.Valido = false;
    this.Restablecer = true;

  }

  PageInicio() {
    this.navCtrl.push(LoginPage);
  }

  ForgotPassword() {
    if (this.forgotPassword.email == undefined || this.forgotPassword.email == '') {
      let toast = this.toastCtrl.create({
        message: 'Email Empty.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      this.userServicesProvider.ForgorPassword(this.forgotPassword)
        .then(data => {
          if (data) {
            let toast = this.toastCtrl.create({
              message: data.message,
              duration: 3000,
              position: 'top'
            });
            toast.present();
            if (data.message == 'Kindly check your email for further instructions') {
              this.global.userToken = data.token;
              this.Aceptar();
            }
          }
        })
    }
  }

  ResetPassword() {
    if (this.recoverPassword.newPassword == undefined || this.recoverPassword.newPassword == '' ||
      this.recoverPassword.verifyPassword == undefined || this.recoverPassword.verifyPassword == '') {
      let toast = this.toastCtrl.create({
        message: 'Please Confirm Password',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    // } if (!this.confirmToken) {
    //   let toast = this.toastCtrl.create({
    //     message: 'Error Token',
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    } else {
      this.userServicesProvider.RecoverPassword(this.recoverPassword)
        .then(data => {
          if (data) {
            let toast = this.toastCtrl.create({
              message: data.message,
              duration: 3000,
              position: 'top'
            });
            toast.present();
            if (data.message == 'Check your email for more information.') {
              this.PageInicio();
            }
          }
        })
    }
  }

  ConfirmToken() {
    if (this.recoverPassword.reset_password_token !== undefined || this.recoverPassword.reset_password_token !== ''){
      if (this.recoverPassword.reset_password_token == this.global.userToken) {
        this.Listo();
      }
    }
  //   if (this.confirmToken.token == undefined || this.confirmToken.token == '') {
  //     let toast = this.toastCtrl.create({
  //       message: 'Token Empty.',
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   } else {
  //     this.userServicesProvider.ConfirmToken(this.confirmToken)
  //       // .subscribe(token => {
  //       //   if (token.message == 'Token') {
  //       //     this.global.userToken = this.confirmToken.token;
  //       //     this.Listo();
  //       //   } else {
  //       //     let toast = this.toastCtrl.create({
  //       //             message: 'Error',
  //       //             duration: 3000,
  //       //             position: 'top'
  //       //           });
  //       //           toast.present();
  //       //   }
  //       // })
  //     .then(token => {
  //       if (token) {
  //         let toast = this.toastCtrl.create({
  //           message: token.message,
  //           duration: 3000,
  //           position: 'top'
  //         });
  //         toast.present();
  //         if (token.message == 'Token') {
  //           this.global.userToken = this.confirmToken.token;
  //           this.Listo();
  //         } else {
  //           let toast = this.toastCtrl.create({
  //             message: 'Else',
  //             duration: 3000,
  //             position: 'top'
  //           });
  //           toast.present();
  //         }
  //       }
  //     })
  //   }
  }
}
