import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { Signup } from '../../models/signup';
import { UserServicesProvider } from '../../providers/services/user-services/user-services';
import { LoginPage } from '../login/login';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  langs;
  langForm;


  private userSignup: Signup;
  private confirmPassword: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public userServicesProvider: UserServicesProvider,
    public global: GlobalProvider) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
    this.langForm = new FormGroup({
      "langs": new FormControl({ value: 'boy' })
    });


    this.userSignup = new Signup();
    this.userSignup.email;
    this.userSignup.password;
    this.userSignup.identification;
    this.userSignup.name;
    this.userSignup.gender;
    this.userSignup.nickname;
    this.confirmPassword;
  }

  doSignup() {
    if (this.userSignup.email == undefined || this.userSignup.password == undefined || this.userSignup.email == "" || this.userSignup.password == "" ||
      this.userSignup.identification == undefined || this.userSignup.name == undefined || this.userSignup.identification == "" || this.userSignup.name == "" ||
      this.userSignup.gender == undefined || this.userSignup.nickname == undefined || this.userSignup.gender == "" || this.userSignup.nickname == "") {
      let toast = this.toastCtrl.create({
        message: 'Campos incorrectos.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      if (this.userSignup.password !== this.confirmPassword) {
        let toast = this.toastCtrl.create({
          message: 'Revisa tus contraseñas.',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      } else {
        this.userServicesProvider.Signup(this.userSignup)
          .then(data => {
            if (data) {
              let toast = this.toastCtrl.create({
                message: data.message,
                duration: 3000,
                position: 'top'
              });
              toast.present();
              if (data.message == 'User Created') {
                this.navCtrl.push(LoginPage);
              }
            }
          })
      }
    }
    // Attempt to login in through our User service
    // this.user.signup(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {

    //   this.navCtrl.push(MainPage);

    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

  doSignupDis() {
    if (this.userSignup.email == undefined || this.userSignup.password == undefined || this.userSignup.email == "" || this.userSignup.password == "" ||
      this.userSignup.identification == undefined || this.userSignup.name == undefined || this.userSignup.identification == "" || this.userSignup.name == "" ||
      this.userSignup.gender == undefined || this.userSignup.nickname == undefined || this.userSignup.gender == "" || this.userSignup.nickname == "") {
      let toast = this.toastCtrl.create({
        message: 'Campos incorrectos.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
      // if (this.userSignup.password !== this.confirmPassword) {
      //   let toast = this.toastCtrl.create({
      //     message: 'Revisa tus contraseñas.',
      //     duration: 3000,
      //     position: 'top'
      //   });
      //   toast.present();
      // } else {
          this.global.SUemail = this.userSignup.email;
          this.global.SUpassword = this.userSignup.password;
          this.global.SUidentification = this.userSignup.identification;
          this.global.SUname = this.userSignup.name;
          this.global.SUgender = this.userSignup.gender;
          this.global.SUnickname = this.userSignup.nickname;
          this.global.SUgender = this.userSignup.gender;

          this.navCtrl.push(LoginPage);
      // }
    }
  }
  // Attempt to login in through our User service
  // this.user.signup(this.account).subscribe((resp) => {
  //   this.navCtrl.push(MainPage);
  // }, (err) => {

  //   this.navCtrl.push(MainPage);

  //   // Unable to sign up
  //   let toast = this.toastCtrl.create({
  //     message: this.signupErrorString,
  //     duration: 3000,
  //     position: 'top'
  //   });
  //   toast.present();
  // });

}
